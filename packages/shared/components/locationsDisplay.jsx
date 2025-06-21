import {  Platform, FlatList } from "react-native";
import { Box, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Dropdown from "./dropdown/dropdownSelect";
import SearchInput from "./searchInput";
import CardSeparator from "../components/cardSeparator";
import LocationCard from "./locationCard";
import PaginationButtons from "./paginationButtons";
import { Theme } from "../store/colours";

const LocationsDisplay = ({ locations, fetchLocations, showSearch, onSelectDropdown, dropdownData, nextPage, prevPage, fetchResidents }) => {
    const { colorMode } = useColorMode();

    return Platform.OS === 'web'
    ? (
        <Box maxH={'100vh'} alignContent={'center'} bg={Theme[colorMode].backgroundColour}>
            {dropdownData && <Dropdown showSearch={onSelectDropdown} data={dropdownData} />}
            <Box maxH="80vh" overflowY="auto" >
                <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)'}} gap={6}>
                    {
                        locations.map((item) => (
                            <GridItem key={item.id}>
                                <LocationCard
                                    name={item.name} type={item.type} locationID={item.id}
                                    dimension={item.dimension} getResidents={() => fetchResidents(item.url)}
                                />
                            </GridItem>
                        ))
                    }
                    <GridItem>
                        <PaginationButtons getData={fetchLocations} nextPage={nextPage} prevPage={prevPage} />
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
                    showSearch ? (<SearchInput showSearch={onSelectDropdown} endpoint={'location'} screen={'/filteredLocations'} />) : null
                )}
                // stickyHeaderIndices={showSearch ? ([0]) : ([])} #Rethinking
                ListFooterComponent={<PaginationButtons getData={fetchLocations} nextPage={nextPage} prevPage={prevPage} />}
                ItemSeparatorComponent={<CardSeparator />}
                data={locations}
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => (
                    <LocationCard 
                        name={item.name} type={item.type} locationID={item.id}
                        dimension={item.dimension} getResidents={() => fetchResidents(item.url)}
                    />
                )}
            />
        </>
    )
}

export default LocationsDisplay;