import { FeaturedCharacterCard } from "@/components/shared/FeaturedCharacterCard";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router";
import useStore, { type CharacterTypes } from "shared/store/stateStore";

export default function HomePage( ){
    const characters = useStore((state) => state.characters);
    const fetchCharacters = useStore((state) => state.fetchCharacters);

    useEffect(() => {
        fetchCharacters('https://rickandmortyapi.com/api/character/')
    }, []);

    function getRandomCharacters(array: Array<CharacterTypes>, count: number) {
        const shuffled = [...array];
        const currentIndex = shuffled.length;

        if (count > currentIndex) count = currentIndex;
        for (let i = 0; i < count; i++) {
            const randIndex = i + Math.floor(Math.random() * (currentIndex - i));
            [shuffled[i], shuffled[randIndex]] = [shuffled[randIndex], shuffled[i]];
        }

        return shuffled.slice(0, count);
    }

    const randomCharacters = getRandomCharacters(characters, 3);

    return (
        <div className="bg-[var(--backgroundColour)] text-[var(--inverseText)]">

            <section className="flex flex-col items-center justify-center text-center py-24 px-6">
                <h1 className="text-5xl font-bold mb-4 tracking-tight">Welcome to the Multiverse</h1>
                <p className="text-lg max-w-xl mb-6">
                Dive into the chaotic adventures of Rick, Morty, and every bizarre character they meet along the way.
                </p>
                <Button className="text-lg px-6 py-4 rounded-full bg-[var(--inverseBackground)] text-[var(--generalText)]">
                    <Link to={'/characters'}>Explore Characters</Link>
                </Button>
            </section>

            <section className="px-6 py-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">Featured Characters</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {randomCharacters.map((character: CharacterTypes) => (
                    <FeaturedCharacterCard key={character.id} name={character.name} image={character.image} status={character.status} species={character.species} location={character.location}/>
                ))}
                </div>
            </section>

            {/* Footer 
            <Footer /> */}
        </div>
    );
}