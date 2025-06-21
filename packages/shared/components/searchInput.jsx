import { Pressable, TextInput, View, useColorScheme } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useStore from '../store/stateStore';
import { Link } from 'expo-router';
import { Theme } from '../store/colours';

const SearchInput = ({ endpoint, showSearch, screen }) => {
    const theme = Theme[useColorScheme()];
    const fetchFiltered = useStore((state) => state.fetchFilteredData);
    const filter = useStore((state) => state.searchFilter);
    const setQuery = useStore((state) => state.setSearchQuery);
    const query = useStore((state) => state.searchQuery);

    return (
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingHorizontal: 5, borderRadius: 8, marginHorizontal: 'auto', marginBottom: 4, borderWidth: 2, borderColor: theme.inverseText }}>
            <Pressable onPress={() => {showSearch(); setQuery('')}}>
                <FontAwesome name="close" size={24} color={theme.inverseText} />
            </Pressable>
            <TextInput style={{ paddingVertical: 5, borderLeftWidth: 1, borderRightWidth: 1, borderColor: theme.inverseText, color: theme.inverseText, width: "70%" }}
             value={query} onChangeText={setQuery} 
             textAlign='center' 
             placeholder='Type here...'
             placeholderTextColor={theme.inverseText}
             selectionColor={theme.inverseText}
            />
            <Link href={screen} asChild>
                <Pressable onPress={() => {
                    const url = `https://rickandmortyapi.com/api/${endpoint}/?${filter}=${query}`;
                    fetchFiltered(url); 
                    showSearch();
                    setQuery('');
                }}>
                    <FontAwesome name="search" size={24} color={query ? theme.inverseText : "gray"} />
                </Pressable>
            </Link>
        </View>
    );
}

export default SearchInput;