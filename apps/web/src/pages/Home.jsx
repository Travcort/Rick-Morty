import { Box } from "@chakra-ui/react";
import TypeWriter from "../components/TypeWriter";

const HomePage = () => {

    return (
        <Box maxH={'100vh'} alignContent={"center"}>
            <TypeWriter />
        </Box>
    );
}

export default HomePage;