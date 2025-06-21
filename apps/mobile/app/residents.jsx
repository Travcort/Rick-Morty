import { View, FlatList, useColorScheme } from "react-native";
import CharacterCard from "../components/characterCard";
import useStore from "../data/stateStore";
import EmptyList from "../components/emptyList";
import CardSeparator from "../components/cardSeparator";
import { Theme } from "../data/colours";
import Loader from "shared/components/loader";

export default function ResidentsPage() {
  const colorScheme = useColorScheme();
  const theme = Theme[colorScheme];

    const residents = useStore((state) => state.locationResidents);
    const fetchEpisodes = useStore((state) => state.storeEpisodes);
    const isLoading = useStore((state) => state.isLoading);
    
    return (
        <View style={{flex: 1, backgroundColor: theme.backgroundColour}}>
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
          ListEmptyComponent={<EmptyList />}
          ItemSeparatorComponent={<CardSeparator />}
          data={residents}
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