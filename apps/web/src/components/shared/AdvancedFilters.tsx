import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronRight, ChevronDown, Check, ListFilterPlus, Search } from "lucide-react";
import { useState } from "react";
import { charactersDropdownData, episodesDropdownData, locationsDropdownData, type DropdownOptions } from "shared/store/dropdownStore";
import { Button } from "../ui/button";
import useStore from "shared/store/stateStore";
import { useNavigate, useLocation } from "react-router";
import { Input } from "../ui/input";

export function AdvancedFilters() {
    const navigate = useNavigate();
    const location = useLocation();
    const fetchFilteredData = useStore((state) => state.fetchFilteredData);
    const [expandedKey, setExpandedKey] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
    const [nameSearch, setNameSearch] = useState('');

    const pathname = location.pathname.slice(1, -1);

    const toggleExpand = (key: string) => {
        setExpandedKey((prev) => (prev === key ? null : key));
    };

    const toggleOption = (groupKey: string, optionKey: string) => {
        setSelectedOptions((prev) => {
            const currentArray = prev[groupKey] ? [...prev[groupKey]] : [];

            const index = currentArray.indexOf(optionKey);
            if (index > -1) {
                currentArray.splice(index, 1); // remove it
            } else {
                currentArray.push(optionKey); // add it
            }

            return {
            ...prev,
            [groupKey]: currentArray,
            };
        });
    };

    return (
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 items-center mt-10 mx-auto">

            <div className="flex items-center gap-3 shadow-sm rounded-md p-2 bg-[var(--cardBackground)]">
                <Input className="text-black bg-[var(--generalText)] border-[var(--generalText)]" value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} placeholder={`Search by ${charactersDropdownData[1].value}`} />
                <Button variant="ghost" size="icon" className="size-8 text-[var(--generalText)]" asChild>
                    <Search onClick={() => {
                        const query = pathname === 'character' ? charactersDropdownData : pathname === 'location' ? locationsDropdownData: episodesDropdownData
                        const url = `https://rickandmortyapi.com/api/${pathname}/?${query[1].key}=${nameSearch}`
                        fetchFilteredData(url);
                        navigate(`/${pathname}s/filtered`);
                    }} />
                </Button>
            </div>

            {pathname === 'character' && 
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-[var(--generalText)] bg-[var(--cardBackground)]">
                        ADVANCED FILTERS
                        <ListFilterPlus className="w-4 h-4 text-[var(--generalText)]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64">
                            {charactersDropdownData
                            .filter((item): item is typeof item & { key: string } => 'options' in item  && typeof item.key === 'string')
                            .map((filterItem) => (
                                <div key={filterItem.key}>
                                    <DropdownMenuItem
                                        className="flex justify-between items-center cursor-pointer"
                                        onSelect={(e) => {
                                            e.preventDefault();
                                            toggleExpand(filterItem.key);
                                        }}
                                    >
                                        <span>{filterItem.value}</span>
                                        {expandedKey === filterItem.key 
                                            ? (<ChevronDown className="w-4 h-4" />) 
                                            : (<ChevronRight className="w-4 h-4" />)
                                        }
                                    </DropdownMenuItem>

                                    {expandedKey === filterItem.key &&
                                        filterItem.options?.map((option: DropdownOptions) => (
                                            <DropdownMenuItem
                                                key={option.key}
                                                className="pl-6 flex justify-between items-center cursor-pointer"
                                                onSelect={(e) => {
                                                e.preventDefault();
                                                toggleOption(filterItem.key, option.value.toLowerCase());
                                                }}
                                            >
                                                <span>{option.value}</span>
                                                {selectedOptions[filterItem.key]?.includes(option.value.toLowerCase()) && (
                                                <Check className="w-4 h-4 text-green-500" />
                                                )}
                                            </DropdownMenuItem>
                                        ))
                                    }
                                </div>
                            ))}

                            <Button onClick={() => {
                                const queryString = Object.entries(selectedOptions).map(([key, values]) => `${key}=${values.join(',')}`).join('&');
                                const url = `https://rickandmortyapi.com/api/${pathname}/?${queryString}`
                                fetchFilteredData(url);
                                navigate(`/${pathname}s/filtered`)
                                }} className="h-7"
                            >
                                Apply
                            </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        </div>
    );
}
