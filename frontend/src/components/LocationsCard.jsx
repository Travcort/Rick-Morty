import { useColorModeValue, Card, CardBody, Stack, Text } from "@chakra-ui/react";

const LocationsCard = ({id, name, type, dimension}) => {
    const background = useColorModeValue("blue.900", "gray.300");
    const textColour = useColorModeValue("white", "black");

    return(
        <Card margin={'auto'} bg={background} maxW={'sm'} alignItems={"center"} mt={5}>
            <Stack>
                <CardBody color={textColour}>
                    <Text><strong>ID:</strong> { id }</Text>
                    <Text><strong>Name:</strong> { name }</Text>
                    <Text><strong>Type:</strong> { type }</Text>
                    <Text><strong>Dimension:</strong> { dimension }</Text>
                </CardBody>
            </Stack>
        </Card>
    );
}

export default LocationsCard;