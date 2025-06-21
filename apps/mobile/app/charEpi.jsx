import { View, FlatList, ActivityIndicator, useColorScheme } from "react-native";
import EpisodeCard from "../components/episodeCard";
import useStore from "../data/stateStore";
import EmptyList from "../components/emptyList";
import CardSeparator from "../components/cardSeparator";
import { Theme } from "../data/colours";

export default function CharacterEpisodesPage() {
  const colorScheme = useColorScheme();
  const theme = Theme[colorScheme];

    const episodes = useStore((state) => state.characterEpisodes);
    const isLoading = useStore((state) => state.isLoading);
    const fetchCharacters = useStore((state) => state.storeCharacters);
    
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
          data={episodes}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
                <EpisodeCard name={item.name} airDate={item.air_date} 
                    getCharacters={() => fetchCharacters(item.url)}
                    episode={item.episode} episodeID={item.id}
                />
          )}
          />
        )}
      </View>
    );
}