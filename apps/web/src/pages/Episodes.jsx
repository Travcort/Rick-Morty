import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EpisodesDisplay from "shared/components/episodesDisplay";
import Loader from "shared/components/loader";
import { Theme } from "shared/store/colours";
import { episodesDropdownData } from "shared/store/dropdownStore";
import useStore from "shared/store/stateStore";

export default function EpisodesPage() {
    const { colorMode } = useColorMode();
    const theme = Theme[colorMode];
    const isLoading = useStore((state) => state.isLoading);
    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const episodes = useStore((state) => state.episodes);
    const fetchEpisodes = useStore((state) => state.fetchEpisodes);
    const fetchCharacters = useStore((state) => state.storeCharacters);
    const [showSearch, setShowSearch] = useState(false);
    
    const dropdownData = episodesDropdownData;

    const onSelectDropdown = () => {
        setShowSearch(!showSearch);
    }

    useEffect(() => {
        fetchEpisodes('https://rickandmortyapi.com/api/episode');
    }, [])

    return (
        <Box style={{flex: 1, backgroundColor: theme.backgroundColor}}>
            {isLoading ? (
                <Loader />
            ) : (
                <EpisodesDisplay {...{ episodes, fetchEpisodes, showSearch, dropdownData, onSelectDropdown, prevPage, nextPage, fetchCharacters }} />
            )
            }
        </Box>
    );
}