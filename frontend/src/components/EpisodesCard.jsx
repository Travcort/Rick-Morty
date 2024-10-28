import { useColorModeValue, Card, CardBody, Text } from "@chakra-ui/react";

const EpisodesCard = ({id, name, air_date, episode}) => {
    const background = useColorModeValue("blue.900", "gray.300");
    const textColour = useColorModeValue("white", "black");

    return(
        <Card maxW={'sm'} margin={'auto'} bg={background} mt={5} alignItems={'center'}>
            <CardBody color={textColour}>
                <Text><strong>ID:</strong> { id }</Text>
                <Text><strong>Name:</strong> { name }</Text>
                <Text><strong>Air Date:</strong> { air_date }</Text>
                <Text><strong>Episode:</strong>{ episode }</Text>
            </CardBody>
        </Card>
    );
}

export default EpisodesCard;