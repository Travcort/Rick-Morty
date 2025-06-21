import { View, Image, TextInput, ActivityIndicator, useColorScheme } from "react-native";
import useStore from "../store/stateStore";
import { Theme } from "../store/colours";
import CharactersDisplay from "../components/charactersDisplay";

const SearchResponse = ({ filteredCharacters }) => {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme]

    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const fetchCharacters = useStore((state) => state.fetchFilteredData);
    const fetchEpisodes = useStore((state) => state.storeEpisodes);

    const roastData = [
        "If this character were real, they’d still be less important than Noob-Noob.",
        "This character is as fictional as Jerry’s spine.",
        "You’re searching for a character that doesn’t exist? That’s some real ‘Pluto is a planet’ energy.",
        "This search was so bad, I need to take a quick existential crisis break.",
        "Your search results are emptier than Summer’s Snapchat streaks."
    ]

    const randomNumber = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        filteredCharacters ? (
            <CharactersDisplay characters={filteredCharacters} {...{ fetchCharacters, nextPage, prevPage, fetchEpisodes }} />
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

export default function FilteredCharactersPage() {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];
    const isLoading = useStore((state) => state.isLoading);
    const filteredCharacters = useStore((state) => state.filteredData);

    return (
        <View style={{flex: 1, backgroundColor: theme.backgroundColour}}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size={"large"} />
                </View>
            ) : (
                <SearchResponse filteredCharacters={filteredCharacters} />
            )
            }
        </View>
    );
}