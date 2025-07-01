import { CharacterCard } from "@/components/shared/CharacterCard";
import PaginationButtons from "@/components/shared/PaginationButtons";
import { Spinner } from "@/components/shared/Spinner";
import { useEffect } from "react";
import useStore from "shared/store/stateStore";

export default function CharactersPage() {
    const isLoading = useStore((state) => state.isLoading);
    const nextPage = useStore((state) => state.nextPage);
    const prevPage = useStore((state) => state.prevPage);
    const characters = useStore((state) => state.characters);
    const fetchCharacters = useStore((state) => state.fetchCharacters);
    const fetchEpisodes = useStore((state) => state.storeEpisodes);

    useEffect(() => {
        fetchCharacters('https://rickandmortyapi.com/api/character')
    }, []);

    return (
        <div className="flex flex-1 flex-col">
            {isLoading
                ?(<Spinner size="large" className="text-[var(--cardBackground)]" />)
                :(
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                            {characters.map((character) => (
                                <CharacterCard key={character.id} name={character.name} image={character.image} 
                                    gender={character.gender} status={character.status}
                                    species={character.species} origin={character.origin} 
                                    location={character.location} id={character.id} fetchEpisodes={fetchEpisodes}
                                />
                            ))}
                        </div>
                        <PaginationButtons getData={fetchCharacters} prevPage={prevPage} nextPage={nextPage} />
                    </>
                )
            }
        </div>
    );
}