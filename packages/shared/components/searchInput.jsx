import { Platform, Pressable, TextInput, View, useColorScheme } from 'react-native';
import { FaSearch } from "react-icons/fa";
import useStore from '../store/stateStore';
import { Link } from 'expo-router';
import { Theme } from '../store/colours';

const SearchInput = ({ endpoint, showSearch, screen }) => {
    const theme = Theme[useColorScheme()];
    const fetchFiltered = useStore((state) => state.fetchFilteredData);
    const filter = useStore((state) => state.searchFilter);
    const setQuery = useStore((state) => state.setSearchQuery);
    const query = useStore((state) => state.searchQuery);

    const color = query ? theme.inverseText : 'gray';
    const handleSearch = () => {
        const url = `https://rickandmortyapi.com/api/${endpoint}/?${filter}=${query}`;
        fetchFiltered(url); 
        showSearch();
        setQuery('');
    }

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
            {Platform.OS === 'web'
            ?(
                <a href={screen}>
                    <Pressable onPress={handleSearch}>
                        <FaSearch size={24} color={color} />
                    </Pressable>
                </a>
            )
            :(
                <Link href={screen} asChild>
                    <Pressable onPress={handleSearch}>
                        <FontAwesome name="search" size={24} color={color} />;
                    </Pressable>
                </Link>
            )
            }
        </View>
    );
}

export default SearchInput;