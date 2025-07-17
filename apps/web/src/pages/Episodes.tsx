import useStore, { type EpisodeTypes } from "shared/store/stateStore";
import EndpointsLayout from "./EndpointsLayout";
import { EpisodeCard } from "@/components/shared/EpisodeCard";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function EpisodesPage() {
    const { id, filtered } = useParams();
    const isLoading = useStore((state) => state.isLoading);
    const prevPage = useStore((state) => state.prevPage);
    const nextPage = useStore((state) => state.nextPage);
    const episodes = useStore((state) => {
        if(filtered) return state.filteredData as EpisodeTypes[];
        return id ? state.characterEpisodes : state.episodes
    });
    const fetchEpisodes = useStore((state) => filtered ? state.fetchFilteredData : state.fetchEpisodes);
    const fetchCharacters = useStore((state) => state.storeCharacters);

    useEffect(() => {
        if (!id) {
            fetchEpisodes('https://rickandmortyapi.com/api/episode');
        }
    }, [id, fetchEpisodes])

    return (
        <EndpointsLayout 
            isLoading={isLoading}
            prevPage={prevPage}
            nextPage={nextPage}
            items={episodes}
            {...(!id && { fetchData: fetchEpisodes })}
            renderItem={(episode: EpisodeTypes) => (
                <EpisodeCard 
                    key={episode.id}
                    id={episode.id}
                    name={episode.name}
                    air_date={episode.air_date}
                    episode={episode.episode}
                    fetchCharacters={fetchCharacters}
                />
            )}
        />
    );
}