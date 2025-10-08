import {  FlatList, Image, View } from "react-native";
import LocationCard from "./LocationsCard";
import PaginationButtons from "../PaginationButtons";
import CardSeparator from "../CardSeparator";
import { useLocationsContext } from "@/lib/Context";
import { Button, Text } from "react-native-paper";
import AdvancedFilters from "../AdvancedFilters";
import NotFoundImage from '@/assets/images/not-found.jpg';
import { useRouter } from "expo-router";

const LocationsDisplay = () => {
    const { dropDownData,
        locations, fetchLocations, fetchResidents,
        prevPage, nextPage,
        modal, closeModal, toggleModal
    } = useLocationsContext();

    const router = useRouter();

    return (
        <>
            <Button mode="contained" icon="filter-variant-plus" 
                contentStyle={{ flexDirection: 'row-reverse' }} onPress={toggleModal}
                style={{ alignSelf: 'center', marginTop: '10%', width: '90%' }}
            >
                ADVANCED FILTERS
            </Button>

            <AdvancedFilters {...{ dropDownData, modal, closeModal, toggleModal }} />

            {locations
                ? (
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
                ) 
                : (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="titleLarge">No Locations Found</Text>
                        <Image source={NotFoundImage} style={{ width: '70%', height: '70%' }} resizeMode="contain" />
                        <Button icon="arrow-left-thick" mode="contained" onPress={() => router.replace('/locations')}>Back</Button>
                    </View>
                )
            }
        </>
    );
}

export default LocationsDisplay;