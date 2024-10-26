import { useEffect } from "react";
import DetailsCard from "../components/Card";
import useData from "../data/Data";

const CharactersPage = () => {

    const { getCharacters, characters } = useData();

    useEffect(() => {
        getCharacters();
    }, []);

    return(
        <DetailsCard id={characters.id} status={characters.status} name={characters.name} species={characters.species} gender={characters.gender} image={characters.image}  />
    );
}

export default CharactersPage;