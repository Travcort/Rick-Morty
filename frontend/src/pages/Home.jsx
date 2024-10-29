import { Box } from "@chakra-ui/react";
import TypeWriter from "../components/TypeWriter";
import CarouselCard from "../components/CarouselCard";

const HomePage = () => {

    return (
        <Box maxH={'100vh'} alignContent={"center"}>
            <CarouselCard />
            <TypeWriter />
        </Box>
    );
}

export default HomePage;