import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const HomePage = () => {
    const gradient = useColorModeValue("blackAlpha.900", "gray.300")

    return(
        <Box minH={'100vh'}>
            <Text 
            color={gradient}
            fontSize={{lg: '6xl', sm: '4xl'}}
            fontWeight='extrabold'
            >
                The One Stop Shop for Rick and Morty Fans
            </Text> 
        </Box>
    );
}

export default HomePage;