import Colours from "@/lib/Colours";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { locationsDropdownData } from "shared/store/dropdownStore";
import useStore, { ApiLocationTypes } from "shared/store/stateStore";
import LocationsDisplay from "@/components/locations/LocationsDisplay";
import { LocationsContext, useMyAppContext } from "@/lib/Context";
import { useLocalSearchParams } from "expo-router";

export default function Locations() {
    const { customTheme } = useMyAppContext();
    const { filtered } = useLocalSearchParams();
    const isLoading = useStore((state) => state.isLoading);
    const dropDownData = locationsDropdownData;
    const locations = useStore((state) => filtered ? state.filteredData as ApiLocationTypes[] : state.locations);
    const fetchLocations = useStore((state) => state.fetchLocations);
    const fetchResidents = useStore((state) => state.storeResidents);
    const prevPage = useStore((state) => state.prevPage);
    const nextPage = useStore((state) => state.nextPage);

    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(false);
    const toggleModal = () => setModal(!modal);

    useEffect(() => {
        fetchLocations('https://rickandmortyapi.com/api/location');
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: Colours[customTheme].background }}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size={"large"} />
                </View>
            ) : (
                <LocationsContext.Provider
                    value={{ dropDownData,
                        locations, fetchLocations, fetchResidents,
                        prevPage, nextPage,
                        modal, closeModal, toggleModal
                    }}
                >
                    <LocationsDisplay />
                </LocationsContext.Provider>
            )
            }
        </View>
    );
}