import { FlatList, View, Image, TextInput, ActivityIndicator, useColorScheme } from "react-native";
import LocationCard from "../components/locationCard";
import CardSeparator from "../components/cardSeparator";
import useStore from "../store/stateStore";
import { Theme } from "../store/colours";
import PaginationButtons from "../components/paginationButtons";

const SearchResponse = ({ filteredLocations }) => {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme]

    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const getCharacters = useStore((state) => state.fetchFilteredData);

    const fetchResidents = useStore((state) => state.storeResidents);

    const roastData = [
        "Bruh, even Beth’s childhood horse surgeries made more sense than your search.",
        "Congratulations, you just discovered the dumbest timeline’s version of Atlantis.",
        "You might as well search for ‘The Exact Coordinates of Rick’s Emotional Availability’ while you’re at it.",
        "This place is so fake, even Interdimensional Cable wouldn’t make a commercial about it.",
        "Did you really think this was a real place? I’d call you a Morty, but even he has standards.",
        "This place exists in the same dimension where Beth had a normal childhood. Oh wait…"
    ]

    const randomNumber = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        filteredLocations ? (
            <FlatList 
            ListFooterComponent={<PaginationButtons getData={getCharacters} nextPage={nextPage} prevPage={prevPage} />}
            ItemSeparatorComponent={<CardSeparator />}
            data={filteredLocations}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
                <LocationCard name={item.name} type={item.type} getResidents={() => fetchResidents(item.url)}
                    dimension={item.dimension} locationID={item.id}
                />
            )}
        />
        ) : (
            <View style={{ flexDirection: 'column', gap: 20, marginVertical: 'auto' }}>
                <Image source={require('../assets/images/mockery.png')} resizeMode='contain' />
                <TextInput readOnly={true} placeholder={roastData[randomNumber(1, roastData.length)]} placeholderTextColor={theme.inverseText} textAlign="center" multiline={true}
                style={{ fontSize: 18, fontWeight: '700', backgroundColor: 'rgba(185, 28, 28, 1)', width: "70%", margin: 'auto', borderRadius: 10, padding: 5 }} 
                />
            </View>
        )
    );
}

export default function FilteredLocationsPage() {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];
    const isLoading = useStore((state) => state.isLoading);
    const filteredLocations = useStore((state) => state.filteredData);

    return (
        <View style={{flex: 1, backgroundColor: theme.backgroundColour}}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size={"large"} />
                </View>
            ) : (
                <SearchResponse filteredLocations={filteredLocations} />
            )
            }
        </View>
    );
}