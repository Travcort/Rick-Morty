import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loader from "shared/components/loader";
import LocationsDisplay from "shared/components/locationsDisplay";
import { Theme } from "shared/store/colours";
import { locationsDropdownData } from "shared/store/dropdownStore";
import useStore from "shared/store/stateStore";

export default function LocationsPage() {
    const { colorMode } = useColorMode();
    const theme = Theme[colorMode];
    const isLoading = useStore((state) => state.isLoading);
    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const fetchLocations = useStore((state) => state.fetchLocations);
    const locations = useStore((state) => state.locations);
    const fetchResidents = useStore((state) => state.storeResidents);
    const [showSearch, setShowSearch] = useState(false);

    const dropdownData = locationsDropdownData;

    const onSelectDropdown = () => {
        setShowSearch(!showSearch);
    }

    useEffect(() => {
        fetchLocations('https://rickandmortyapi.com/api/location');
    }, [])

    return (
        <Box style={{flex: 1, backgroundColor: theme.backgroundColor}}>
            {isLoading ? (
                <Box style={{ flex: 1, justifyContent: "center" }}>
                    <Loader />
                </Box>
            ) : (
                <LocationsDisplay {...{ locations, fetchLocations, showSearch, dropdownData, onSelectDropdown, nextPage, prevPage, fetchResidents }} />
            )
            }
        </Box>
    );
}