import { useEffect, useState } from "react";
import { useColorScheme, View } from "react-native";
import Loader from "shared/components/loader";
import LocationsDisplay from "shared/components/locationsDisplay";
import { Theme } from "shared/store/colours";
import { locationsDropdownData } from "shared/store/dropdownStore";
import useStore from "shared/store/stateStore";

export default function Locations() {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];
    const isLoading = useStore((state) => state.isLoading);
    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const fetchLocations = useStore((state) => state.fetchLocations);
    const locations = useStore((state) => state.locations);
    const fetchResidents = useStore((state) => state.storeResidents);
    const [showSearch, setShowSearch] = useState(false);

    const dropdownData = locationsDropdownData;

    const onSelectDropdown = () => {
        setShowSearch(!showSearch);
    }

    useEffect(() => {
        fetchLocations('https://rickandmortyapi.com/api/location');
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: theme.backgroundColour}}>
            {isLoading ? (
                <Loader />
            ) : (
                <LocationsDisplay {...{ locations, fetchLocations, dropdownData, onSelectDropdown, nextPage, prevPage, fetchResidents }} />
            )
            }
        </View>
    );
}