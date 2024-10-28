import EpisodesCard from "../components/EpisodesCard";
import { useEffect } from "react";
import { InputGroup, InputLeftElement, Input, Container } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import useData from "../data/Data";

const EpisodesPage = () => {
    const { episodes, getEpisodes } = useData();

    useEffect(() => {
        getEpisodes(1);
    }, []);

    const handleSearch = (e) => getEpisodes(e.target.value);

    return(
        <>
            <Container mt={5}>
                <InputGroup>
                    <InputLeftElement><FaSearch /></InputLeftElement>
                    <Input type="text"  placeholder="Search an Episode [Numbers Only!]" onChange={handleSearch}/>
                </InputGroup>
            </Container>
            <EpisodesCard id={episodes.id} name={episodes.name} air_date={episodes.air_date} episode={episodes.episode}/>
        </>
    );
}

export default EpisodesPage;