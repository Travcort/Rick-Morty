import { View, FlatList, ActivityIndicator, useColorScheme } from "react-native";
import CharacterCard from "../components/characterCard";
import useStore from "../data/stateStore";
import EmptyList from "../components/emptyList";
import CardSeparator from "../components/cardSeparator";
import { Theme } from "../data/colours";

export default function EpisodeCharactersPage() {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];

    const characters = useStore((state) => state.episodeCharacters);
    const isLoading = useStore((state) => state.isLoading);

    const fetchEpisodes = useStore((state) => state.storeEpisodes);
    
    return (
        <View style={{flex: 1, backgroundColor: theme.backgroundColour}}>
        {isLoading ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <FlatList
          ListEmptyComponent={<EmptyList />}
          ItemSeparatorComponent={<CardSeparator />}
          data={characters}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
              <CharacterCard 
                  name={item.name} imageUri={item.image} status={item.status} getEpisodes={() => fetchEpisodes(item.url)}
                  species={item.species} origin={item.origin?.name} gender={item.gender}
                  location={item.location?.name} characterID={item.id}
              />
          )}
          />
        )}
      </View>
    );
}