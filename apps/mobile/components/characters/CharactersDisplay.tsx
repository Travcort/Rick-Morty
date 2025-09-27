import { FlatList } from "react-native";
import CharacterCard from "./CharacterCard";
import PaginationButtons from "../PaginationButtons";
import CardSeparator from "../CardSeparator";
import { Button } from "react-native-paper";
import AdvancedFilters from "../AdvancedFilters";
import { useCharactersContext } from "@/lib/Context";

const CharactersDisplay = () => {
    const { 
        characters, fetchCharacters, fetchEpisodes, 
        prevPage, nextPage, 
        modal, closeModal, toggleModal,
        dropDownData 
    } = useCharactersContext();

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
                ListFooterComponent={<PaginationButtons getData={fetchCharacters} nextPage={nextPage} prevPage={prevPage} />}
                ItemSeparatorComponent={() => <CardSeparator />}
                data={characters}
                keyExtractor={(item) => String(item.id)} 
                renderItem={({item}) => (
                    <CharacterCard 
                        name={item.name} imageUri={item.image} status={item.status} getEpisodes={() => fetchEpisodes(item.origin?.url)}
                        species={item.species} origin={item.origin?.name} gender={item.gender}
                        location={item.location?.name} characterID={item.id}
                    />
                )}
            />
        </>
    );
}

export default CharactersDisplay;