import { View } from "react-native";
import { useEffect, useState } from "react";
import { charactersDropdownData } from 'shared/store/dropdownStore';
import useStore, { ApiCharacterTypes } from "shared/store/stateStore";
import Colours from "@/lib/Colours";
import CharactersDisplay from "@/components/characters/CharactersDisplay";
import { ActivityIndicator} from "react-native-paper";
import { CharactersContext, useMyAppContext } from "@/lib/Context";
import { useLocalSearchParams } from "expo-router";

export default function Characters() {
  const { customTheme } = useMyAppContext();
  const { filtered, residents, episodes } = useLocalSearchParams();
  const isLoading = useStore((state) => state.isLoading);
  const dropDownData = charactersDropdownData;
  const characters = useStore((state) => filtered 
    ? state.filteredData as ApiCharacterTypes[] 
    : residents
    ? state.locationResidents
    : episodes
    ? state.episodeCharacters
    : state.characters
  );
  const fetchCharacters = useStore((state) => state.fetchCharacters);
  const fetchEpisodes = useStore((state) => state.storeEpisodes);
  const nextPage = useStore((state) => state.nextPage);
  const prevPage = useStore((state) => state.prevPage);

  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    fetchCharacters('https://rickandmortyapi.com/api/character');
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colours[customTheme].background }}>
      {isLoading 
      ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size={"large"} />
        </View>
      ) 
      : (
        <CharactersContext.Provider
          value={{ dropDownData, 
            characters, fetchCharacters, fetchEpisodes,
            prevPage, nextPage,
            modal, closeModal, toggleModal
          }}
        >
          <CharactersDisplay />
        </CharactersContext.Provider>
      )}
    </View>
  );
}