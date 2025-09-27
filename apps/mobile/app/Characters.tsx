import { View } from "react-native";
import { useEffect, useState } from "react";
import { charactersDropdownData } from 'shared/store/dropdownStore';
import useStore from "shared/store/stateStore";
import { useMyAppContext } from "./_layout";
import Colours from "@/lib/Colours";
import CharactersDisplay from "@/components/characters/CharactersDisplay";
import { ActivityIndicator } from "react-native-paper";
import { CharactersContext } from "@/lib/Context";

export default function Characters() {
  const { customTheme } = useMyAppContext();
  const isLoading = useStore((state) => state.isLoading);
  const dropDownData = charactersDropdownData;
  const characters = useStore((state) => state.characters);
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