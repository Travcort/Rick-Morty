import { View, useColorScheme } from "react-native";
import { useEffect, useState } from "react";;
import { Theme } from "shared/store/colours";
import useStore from "shared/store/stateStore";
import CharactersDisplay from "shared/components/charactersDisplay";
import Loader from "shared/components/loader";
import { charactersDropdownData } from "shared/store/dropdownStore";

export default function CharactersPage() {
  const colorScheme = useColorScheme();
  const theme = Theme[colorScheme];
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
    <View style={{flex: 1, backgroundColor: theme.backgroundColour}}>
      {isLoading 
      ? (
        <Loader />
      ) 
      : (
        <CharactersDisplay {...{ characters, fetchCharacters, showSearch, onSelectDropdown, dropdownData, nextPage, prevPage, fetchEpisodes }} />
      )}
    </View>
  );
}