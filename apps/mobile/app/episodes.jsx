import { View, useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import EpisodesDisplay from "shared/components/episodesDisplay";
import { Theme } from "shared/store/colours";
import useStore from "shared/store/stateStore";
import Loader from "shared/components/loader";
import { episodesDropdownData } from "shared/store/dropdownStore";

export default function EpisodesPage() {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];
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
        <View style={{flex: 1, backgroundColor: theme.backgroundColour}}>
            {isLoading ? (
                <Loader />
            ) : (
                <EpisodesDisplay {...{ episodes, fetchEpisodes, showSearch, dropdownData, onSelectDropdown, prevPage, nextPage, fetchCharacters }} />
            )
            }
        </View>
    );
}