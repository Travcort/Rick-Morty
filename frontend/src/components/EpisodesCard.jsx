import { useColorModeValue, Card, CardBody, Text } from "@chakra-ui/react";

const EpisodesCard = () => {
    const background = useColorModeValue("blue.900", "gray.300");
    const textColour = useColorModeValue("white", "black");

    return(
        <Card maxW={'sm'} margin={'auto'} bg={background} mt={5} alignItems={'center'}>
            <CardBody color={textColour}>
                <Text><strong>ID:</strong> 3</Text>
                <Text><strong>Name:</strong> Anatomy Park</Text>
                <Text><strong>Air Date:</strong> December 16, 2013</Text>
                <Text><strong>Episode:</strong> S01E03</Text>
            </CardBody>
        </Card>
    );
}

export default EpisodesCard;