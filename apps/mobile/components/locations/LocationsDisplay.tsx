import {  FlatList } from "react-native";
import LocationCard from "./LocationsCard";
import PaginationButtons from "../PaginationButtons";
import CardSeparator from "../CardSeparator";
import { useLocationsContext } from "@/lib/Context";
import { Button } from "react-native-paper";
import AdvancedFilters from "../AdvancedFilters";

const LocationsDisplay = () => {
    const { dropDownData,
        locations, fetchLocations, fetchResidents,
        prevPage, nextPage,
        modal, closeModal, toggleModal
    } = useLocationsContext();

    return (
        <>
            <Button mode="contained" icon="filter-variant-plus" 
                contentStyle={{ flexDirection: 'row-reverse' }} onPress={toggleModal}
                style={{ alignSelf: 'center', marginTop: '10%', width: '90%' }}
            >
                ADVANCED FILTERS
            </Button>

            <AdvancedFilters {...{ dropDownData, modal, closeModal, toggleModal }} />

            <FlatList
                ListFooterComponent={<PaginationButtons getData={fetchLocations} nextPage={nextPage} prevPage={prevPage} />}
                ItemSeparatorComponent={() => <CardSeparator />}
                data={locations}
                keyExtractor={(item) => String(item.id)} 
                renderItem={({item}) => (
                    <LocationCard 
                        name={item.name} type={item.type} locationID={item.id}
                        dimension={item.dimension} getResidents={() => fetchResidents(item.url)}
                    />
                )}
            />
        </>
    );
}

export default LocationsDisplay;