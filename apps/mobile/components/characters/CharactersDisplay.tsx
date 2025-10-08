import { FlatList, Image, View } from "react-native";
import CharacterCard from "./CharacterCard";
import PaginationButtons from "../PaginationButtons";
import CardSeparator from "../CardSeparator";
import { Button, Text } from "react-native-paper";
import AdvancedFilters from "../AdvancedFilters";
import { useCharactersContext } from "@/lib/Context";
import NotFoundImage from '@/assets/images/not-found.jpg';
import { useRouter } from "expo-router";

const CharactersDisplay = () => {
    const { 
        characters, fetchCharacters, fetchEpisodes, 
        prevPage, nextPage, 
        modal, closeModal, toggleModal,
        dropDownData 
    } = useCharactersContext();

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

            {characters
                ? (
                    <FlatList
                        ListFooterComponent={<PaginationButtons getData={fetchCharacters} nextPage={nextPage} prevPage={prevPage} />}
                        ItemSeparatorComponent={() => <CardSeparator />}
                        data={characters}
                        keyExtractor={(item) => String(item.id)} 
                        renderItem={({item}) => (
                            <CharacterCard 
                                name={item.name} imageUri={item.image} status={item.status} getEpisodes={() => fetchEpisodes(item.url)}
                                species={item.species} origin={item.origin?.name} gender={item.gender}
                                location={item.location?.name} characterID={item.id}
                            />
                        )}
                    />
                ) 
                : (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="titleLarge">No Characters Found</Text>
                        <Image source={NotFoundImage} style={{ width: '70%', height: '70%' }} resizeMode="contain" />
                        <Button icon="arrow-left-thick" mode="contained" onPress={() => router.replace('/characters')}>Back</Button>
                    </View>
                )
            }
        </>
    );
}

export default CharactersDisplay;