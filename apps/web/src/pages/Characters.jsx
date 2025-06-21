import { Box, useColorMode} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CharactersDisplay from "shared/components/charactersDisplay";
import Loader from "shared/components/loader";
import { Theme } from "shared/store/colours";
import { charactersDropdownData } from "shared/store/dropdownStore";
import useStore from "shared/store/stateStore";

export default function CharactersPage(){
    const { colorMode } = useColorMode();
    const theme = Theme[colorMode];
    const isLoading = useStore((state) => state.isLoading);
    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const characters = useStore((state) => state.characters);
    const fetchCharacters = useStore((state) => state.fetchCharacters);
    const fetchEpisodes = useStore((state) => state.storeEpisodes);
    const [showSearch, setShowSearch] = useState(false);

    const dropdownData = charactersDropdownData;
    
    const onSelectDropdown = () => {
        setShowSearch(!showSearch);
    }

    useEffect(() => {
        fetchCharacters('https://rickandmortyapi.com/api/character');
    }, []);


    return (
        <Box style={{flex: 1, backgroundColor: theme.backgroundColor}}>
            {isLoading 
            ? (
                <Box style={{ flex: 1, justifyContent: "center" }}>
                    <Loader />
                </Box>
            ) 
            : (
                <CharactersDisplay {...{ characters, fetchCharacters, showSearch, onSelectDropdown, dropdownData, nextPage, prevPage, fetchEpisodes }} />
            )}
        </Box>
    );
}