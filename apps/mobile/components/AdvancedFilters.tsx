import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useStore from "shared/store/stateStore";
import { CharactersDropdownTypes, EpisodesDropdownTypes, LocationsDropdownTypes } from 'shared/store/dropdownStore';
import DropDown from "./DropDown";

type AdvancedFiltersProps = { 
    dropDownData: Array<CharactersDropdownTypes|LocationsDropdownTypes|EpisodesDropdownTypes>;    
    modal: boolean; 
    closeModal: () => void;
    toggleModal: () => void;
};

export default function AdvancedFilters ({ dropDownData, modal, closeModal, toggleModal }: Readonly<AdvancedFiltersProps>) {

    const router = useRouter();
    const fetchFilteredData = useStore((state) => state.fetchFilteredData);

    const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
    const [dropDownQuery, setDropDownQuery] = useState<string>('');
    const [expandedKey, setExpandedKey] = useState<string|null>(null);

    const toggleExpand = (key: string) => {
        setExpandedKey((prev) => (prev === key ? null : key));
    };

    const toggleOption = (groupKey: string, optionKey: string) => {
        setSelectedOptions((prev) => {
            const currentArray = prev[groupKey] ? [...prev[groupKey]] : [];

            const index = currentArray.indexOf(optionKey);
            if (index > -1) {
                currentArray.splice(index, 1); // remove it
            } else {
                currentArray.push(optionKey); // add it
            }

            return {
                ...prev,
                [groupKey]: currentArray,
            };
        });
    };

    const handleSearch = async () => {
        const queryString = Object.entries(selectedOptions).map(([key, values]) => `${key}=${values.join(',')}`).join('&');
        const pathname = dropDownData[0].endpoint;
        const url = `https://rickandmortyapi.com/api/${pathname}/?${queryString}`
        fetchFilteredData(url);
        router.navigate(`/${pathname}s/filtered`)
    };

    return (
        <SafeAreaProvider>
            <Modal
                visible={modal}
                transparent={true}
                onRequestClose={() => {
                    closeModal();
                }}
            >
                <SafeAreaView style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        <DropDown {...{ selectedOptions, dropDownData, dropDownQuery, setDropDownQuery, toggleExpand, toggleOption  }} />
                        <Button mode="contained" style={{ marginTop: '10%' }} 
                            onPress={() => console.log(JSON.stringify(selectedOptions, null, 2))}
                        >
                            Search
                        </Button>
                        <Button mode="contained" style={{ marginTop: '10%' }} 
                            onPress={toggleModal}
                        >
                            Close
                        </Button>
                    </View>
                </SafeAreaView>
            </Modal>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalContainer: {
        margin: 20,
        padding: 20,
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: 4,
    }
});