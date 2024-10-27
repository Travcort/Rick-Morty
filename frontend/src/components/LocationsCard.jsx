import { useColorModeValue, Card, CardBody, Stack, Text } from "@chakra-ui/react";

const LocationsCard = () => {
    const background = useColorModeValue("blue.900", "gray.300");
    const textColour = useColorModeValue("white", "black");

    return(
        <Card margin={'auto'} bg={background} maxW={'sm'} alignItems={"center"} mt={5}>
            <Stack>
                <CardBody color={textColour}>
                    <Text><strong>ID:</strong> 3</Text>
                    <Text><strong>Name:</strong> Citadel of Ricks</Text>
                    <Text><strong>Type:</strong> Space Station</Text>
                    <Text><strong>Dimension:</strong> Unknown</Text>
                </CardBody>
            </Stack>
        </Card>
    );
}

export default LocationsCard;