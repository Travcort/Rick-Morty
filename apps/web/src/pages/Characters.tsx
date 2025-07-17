import { CharacterCard } from "@/components/shared/CharacterCard";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import useStore, { type CharacterTypes } from "shared/store/stateStore";
import EndpointsLayout from "./EndpointsLayout";

export default function CharactersPage() {
    const { id, filtered } = useParams();
    const location = useLocation();
    const isFromLocations = location.pathname.startsWith("/location/");

    const isLoading = useStore((state) => state.isLoading);
    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const characters = useStore((state) => {
        if(id) {
            return isFromLocations ? state.locationResidents : state.episodeCharacters
        }
        if(filtered) return state.filteredData as CharacterTypes[];
        return state.characters;
    });

    const fetchCharacters = useStore((state) => filtered ? state.fetchFilteredData : state.fetchCharacters);
    const fetchEpisodes = useStore((state) => state.storeEpisodes);

    useEffect(() => {
        if(!id) {
            fetchCharacters('https://rickandmortyapi.com/api/character')
        }
    }, [id, fetchCharacters]);

    return (
        <EndpointsLayout
            isLoading={isLoading}
            prevPage={prevPage}
            nextPage={nextPage}
            items={characters}
            {...(!id && { fetchData: fetchCharacters })}
            renderItem={(character: CharacterTypes) => (
                <CharacterCard 
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    image={character.image}
                    location={character.location}
                    gender={character.gender}
                    species={character.species}
                    origin={character.origin}
                    fetchEpisodes={fetchEpisodes}
                />
            )}
        />
    );
}