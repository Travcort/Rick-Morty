import { useEffect } from "react";
import DetailsCard from "../components/CharactersCard";
import useData from "../data/Data";
import { Container, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const CharactersPage = () => {

    const { getCharacters, characters } = useData();

    useEffect(() => {
        getCharacters(1);
    }, []);

    const handleSearch = (e) => {
        getCharacters(e.target.value)
    }

    return(
        <>
            <Container mt={5}>
                <InputGroup>
                    <InputLeftElement><FaSearch /></InputLeftElement>
                    <Input type="text"  placeholder="Search a Character [Numbers Only!]" onChange={handleSearch}/>
                </InputGroup>
            </Container>
            <DetailsCard id={characters.id} status={characters.status} name={characters.name}  
            species={characters.species} gender={characters.gender} 
            image={characters.image} origin={characters.origin?.name} location={characters.location?.name} />
        </>
    );
}

export default CharactersPage;