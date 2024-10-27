import { Card, CardBody, Image, Stack, Heading, Text, Badge, useColorModeValue  } from '@chakra-ui/react';

const DetailsCard = ({ id, status, name, species, gender, image, origin }) => {
    const background = useColorModeValue("blue.900", "gray.300");
    const textColour = useColorModeValue("white", "black");
    return (
        <Card direction={'row'} maxW={'sm'} margin={'auto'} mt={5} borderRadius={10} bg={background}>
            <Image
            objectFit='cover'
            maxW={{ base: '50%', sm: '40%' }}
            src={ image }
            alt={ name }
            />

            <Stack>
                <CardBody color={textColour}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Heading color={textColour}>{ name }</Heading>
                        <Badge variant='solid' color={textColour} colorScheme={status === "Alive" ? 'green' : 'red'}>
                            { status }
                        </Badge>
                    </Stack>
                    <Text><strong>Character ID:</strong> { id }</Text>
                    <Text><strong>Species:</strong> { species }</Text>
                    <Text><strong>Gender:</strong> { gender }</Text>
                    <Text><strong>Origin:</strong> { origin }</Text>
                </CardBody>
            </Stack>
        </Card>
    );
}

export default DetailsCard;