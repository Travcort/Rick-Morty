import { FlatList } from "react-native";
import PaginationButtons from "../PaginationButtons";
import EpisodeCard from "./EpisodesCard";
import CardSeparator from "../CardSeparator";
import { Button } from "react-native-paper";
import AdvancedFilters from "../AdvancedFilters";
import { useEpisodesContext } from "@/lib/Context";

const EpisodesDisplay = () => {
    const {
        episodes, fetchEpisodes, fetchCharacters,
        prevPage, nextPage,
        modal, closeModal, toggleModal,
        dropDownData
    } = useEpisodesContext();

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
        </>
    );
}

export default EpisodesDisplay;