import {  Platform, FlatList } from "react-native";
import { Box, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Dropdown from "./dropdown/dropdownSelect";
import SearchInput from "./searchInput";
import CardSeparator from "../components/cardSeparator";
import EpisodeCard from "./episodeCard";
import PaginationButtons from "./paginationButtons";
import { Theme } from "../store/colours";

const EpisodesDisplay = ({ episodes, fetchEpisodes, showSearch, onSelectDropdown, dropdownData, nextPage, prevPage, fetchCharacters }) => {
    const { colorMode } = useColorMode();

    return Platform.OS === 'web'
    ? (
        <Box maxH={'100vh'} alignContent={'center'} bg={Theme[colorMode].backgroundColour}>
            {dropdownData && <Dropdown showSearch={onSelectDropdown} data={dropdownData} />}
            <Box maxH="80vh" overflowY="auto" >
                <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)'}} gap={6}>
                    {
                        episodes.map((item) => (
                            <GridItem key={item.id}>
                                <EpisodeCard
                                    name={item.name} airDate={item.air_date} episode={item.episode}
                                    location={item.location?.name} episodeID={item.id} getCharacters={() => fetchCharacters(item.url)}
                                />
                            </GridItem>
                        ))
                    }
                    <GridItem>
                        <PaginationButtons getData={fetchEpisodes} nextPage={nextPage} prevPage={prevPage} />
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
                    showSearch ? (<SearchInput showSearch={onSelectDropdown} endpoint={'episode'} screen={'/filteredEpisodes'} />) : null
                )}
                // stickyHeaderIndices={showSearch ? ([0]) : ([])} #Rethinking
                ListFooterComponent={<PaginationButtons getData={fetchEpisodes} nextPage={nextPage} prevPage={prevPage} />}
                ItemSeparatorComponent={<CardSeparator />}
                data={episodes}
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => (
                    <EpisodeCard
                        name={item.name} airDate={item.air_date} episode={item.episode}
                        location={item.location?.name} episodeID={item.id} getCharacters={() => fetchCharacters(item.url)}
                    />
                )}
            />
        </>
    )
}

export default EpisodesDisplay;