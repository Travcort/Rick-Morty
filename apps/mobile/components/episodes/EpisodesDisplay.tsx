import { FlatList, Image, View } from "react-native";
import PaginationButtons from "../PaginationButtons";
import EpisodeCard from "./EpisodesCard";
import CardSeparator from "../CardSeparator";
import { Button, Text } from "react-native-paper";
import AdvancedFilters from "../AdvancedFilters";
import { useEpisodesContext } from "@/lib/Context";
import NotFoundImage from '@/assets/images/not-found.jpg';
import { useRouter } from "expo-router";

const EpisodesDisplay = () => {
    const {
        episodes, fetchEpisodes, fetchCharacters,
        prevPage, nextPage,
        modal, closeModal, toggleModal,
        dropDownData
    } = useEpisodesContext();

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

            {episodes
                ? (
                    <FlatList
                        ListFooterComponent={<PaginationButtons getData={fetchEpisodes} nextPage={nextPage} prevPage={prevPage} />}
                        ItemSeparatorComponent={() => <CardSeparator />}
                        data={episodes}
                        keyExtractor={(item) => String(item.id)} 
                        renderItem={({item}) => (
                            <EpisodeCard
                                name={item.name} airDate={item.air_date} episode={item.episode}
                                episodeID={item.id} getCharacters={() => fetchCharacters(item.url)}
                            />
                        )}
                    />
                ) 
                : (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="titleLarge">No Episodes Found</Text>
                        <Image source={NotFoundImage} style={{ width: '70%', height: '70%' }} resizeMode="contain" />
                        <Button icon="arrow-left-thick" mode="contained" onPress={() => router.replace('/episodes')}>Back</Button>
                    </View>
                )
            }
        </>
    );
}

export default EpisodesDisplay;