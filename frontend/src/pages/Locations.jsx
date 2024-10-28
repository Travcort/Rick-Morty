import { useEffect } from "react";
import { InputGroup, InputLeftElement, Input, Container } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import LocationsCard from "../components/LocationsCard";
import useData from '../data/Data';

const LocationsPage = () => {
    const { locations, getLocations } = useData();

    useEffect(() => {
        getLocations(1);
    }, []);

    const handleSearch = (e) => {
        getLocations(e.target.value);
    }

    return(
       <>
        <Container mt={5}>
            <InputGroup>
                <InputLeftElement><FaSearch /></InputLeftElement>
                <Input type="text"  placeholder="Search a Location [Numbers Only!]" onChange={handleSearch}/>
            </InputGroup>
        </Container>
        <LocationsCard id={locations.id} name={locations.name} type={locations.type} dimension={locations.dimension}/>
       </>
    );
}

export default LocationsPage;