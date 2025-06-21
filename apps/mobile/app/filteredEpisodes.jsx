import { FlatList, View, Image, TextInput, ActivityIndicator, useColorScheme } from "react-native";
import EpisodeCard from "../components/episodeCard";
import CardSeparator from "../components/cardSeparator";
import useStore from "../data/stateStore";
import { Theme } from "../data/colours";
import PaginationButtons from "../components/paginationButtons";

const SearchResponse = ({ filteredEpisodes }) => {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme]

    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const getCharacters = useStore((state) => state.fetchFilteredData);

    const fetchCharacters = useStore((state) => state.storeCharacters);

    const roastData = [
        "If this was an episode of Rick and Morty, the joke would be how bad your search is.",
        "Did you just type with your eyes closed? Because this ain't it, chief.",
        "Did you hit your head on a Plumbus? Because this episode is 100% made up.",
        "You sure you’re not watching bootleg episodes from some guy named Slick and Gorty?",
        "If this episode was real, it would be called ‘The One Where You Fell for Fake Leaks’.",
        "The Council of Ricks just held an emergency meeting to laugh at your search."
    ]

    const randomNumber = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        filteredEpisodes ? (
            <FlatList 
            ListFooterComponent={<PaginationButtons getData={getCharacters} nextPage={nextPage} prevPage={prevPage} />}
            ItemSeparatorComponent={<CardSeparator />}
            data={filteredEpisodes}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
                <EpisodeCard name={item.name} airDate={item.air_date} getCharacters={() => fetchCharacters(item.url)}
                    episode={item.episode} episodeID={item.id}
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

export default function FilteredEpisodesPage() {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];
    const isLoading = useStore((state) => state.isLoading);
    const filteredEpisodes = useStore((state) => state.filteredData);

    return (
        <View style={{flex: 1, backgroundColor: theme.backgroundColour}}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size={"large"} />
                </View>
            ) : (
                <SearchResponse filteredEpisodes={filteredEpisodes} />
            )
            }
        </View>
    );
}