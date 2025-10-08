import { View } from "react-native";
import { useEffect, useState } from "react";
import useStore, { ApiEpisodeTypes } from "shared/store/stateStore";
import { episodesDropdownData } from "shared/store/dropdownStore";
import EpisodesDisplay from "@/components/episodes/EpisodesDisplay";
import Colours from "@/lib/Colours";
import { ActivityIndicator } from "react-native-paper";
import { EpisodesContext, useMyAppContext } from "@/lib/Context";
import { useLocalSearchParams } from "expo-router";

export default function Episodes() {
    const { customTheme } = useMyAppContext();
    const { filtered, characters } = useLocalSearchParams();
    const isLoading = useStore((state) => state.isLoading);
    const dropDownData = episodesDropdownData;
    const episodes = useStore((state) => filtered 
        ? state.filteredData as ApiEpisodeTypes[] 
        : characters
        ? state.characterEpisodes
        : state.episodes
    );
    const fetchEpisodes = useStore((state) => state.fetchEpisodes);
    const fetchCharacters = useStore((state) => state.storeCharacters);
    const prevPage = useStore((state) => state.prevPage);
    const nextPage = useStore((state) => state.nextPage);

    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(false);
    const toggleModal = () => setModal(!modal);

    useEffect(() => {
        fetchEpisodes('https://rickandmortyapi.com/api/episode');
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: Colours[customTheme].background }}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size={"large"} />
                </View>
            ) : (
                <EpisodesContext.Provider
                    value={{ dropDownData,
                        episodes, fetchEpisodes, fetchCharacters,
                        prevPage, nextPage,
                        modal, closeModal, toggleModal
                    }}
                >
                    <EpisodesDisplay />
                </EpisodesContext.Provider>
            )
            }
        </View>
    );
}