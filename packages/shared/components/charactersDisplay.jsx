import {  Platform, FlatList } from "react-native";
import { Box, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Dropdown from "./dropdown/dropdownSelect";
import SearchInput from "./searchInput";
import CardSeparator from "../components/cardSeparator";
import CharacterCard from "./characterCard";
import PaginationButtons from "./paginationButtons";
import { Theme } from "../store/colours";

const CharactersDisplay = ({ characters, fetchCharacters, showSearch, onSelectDropdown, dropdownData, nextPage, prevPage, fetchEpisodes }) => {
    const { colorMode } = useColorMode();

    return Platform.OS === 'web'
    ? (
        <Box maxH={'100vh'} alignContent={'center'} bg={Theme[colorMode].backgroundColour}>
            {dropdownData && <Dropdown showSearch={onSelectDropdown} data={dropdownData} />}
            <Box maxH="80vh" overflowY="auto" >
                <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)'}} gap={6}>
                    {
                        characters.map((item) => (
                            <GridItem key={item.id}>
                                <CharacterCard
                                    name={item.name} imageUri={item.image} status={item.status} getEpisodes={() => fetchEpisodes(item.url)}
                                    species={item.species} origin={item.origin?.name} gender={item.gender}
                                    location={item.location?.name} characterID={item.id}
                                />
                            </GridItem>
                        ))
                    }
                    <GridItem>
                        <PaginationButtons getData={fetchCharacters} nextPage={nextPage} prevPage={prevPage} />
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
    : (
        <>
            <Dropdown showSearch={onSelectDropdown} data={dropdownData} />
            <FlatList
                ListHeaderComponent={() => (
                    showSearch ? (<SearchInput showSearch={onSelectDropdown} endpoint={'character'} screen={'/filteredCharacters'} />) : null
                )}
                // stickyHeaderIndices={showSearch ? ([0]) : ([])} #Rethinking
                ListFooterComponent={<PaginationButtons getData={fetchCharacters} nextPage={nextPage} prevPage={prevPage} />}
                ItemSeparatorComponent={<CardSeparator />}
                data={characters}
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => (
                    <CharacterCard 
                        name={item.name} imageUri={item.image} status={item.status} getEpisodes={() => fetchEpisodes(item.url)}
                        species={item.species} origin={item.origin?.name} gender={item.gender}
                        location={item.location?.name} characterID={item.id}
                    />
                )}
            />
        </>
    )
}

export default CharactersDisplay;