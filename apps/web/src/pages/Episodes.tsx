import useStore, { type EpisodeTypes } from "shared/store/stateStore";
import EndpointsLayout from "./EndpointsLayout";
import { EpisodeCard } from "@/components/shared/EpisodeCard";
import { useEffect } from "react";

export default function EpisodesPage() {
    const isLoading = useStore((state) => state.isLoading);
    const prevPage = useStore((state) => state.prevPage);
    const nextPage = useStore((state) => state.nextPage);
    const episodes = useStore((state) => state.episodes);
    const fetchEpisodes = useStore((state) => state.fetchEpisodes);
    const fetchCharacters = useStore((state) => state.storeCharacters);

    useEffect(() => {
        fetchEpisodes('https://rickandmortyapi.com/api/episode')
    }, []);

    return (
        <EndpointsLayout 
            isLoading={isLoading}
            prevPage={prevPage}
            nextPage={nextPage}
            items={episodes}
            fetchData={fetchEpisodes}
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