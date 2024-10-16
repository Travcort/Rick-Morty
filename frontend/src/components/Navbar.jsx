import { useColorMode, Button, Container, Flex,  Stack,  Spacer,  Text, useColorModeValue } from '@chakra-ui/react'
import { IoSunny, IoMoon } from "react-icons/io5"; 
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const textColour = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
    const hoverColour = {
        bg: "yellow.500",
        color: "blackAlpha.900",
    };

    return(
        <div>
            <Container borderRadius={10} bg={useColorModeValue("purple.600", "whiteAlpha.600")} maxW={"1200px"}>
                <Flex alignItems={"center"} padding={2}>
                    <Text fontWeight={'bold'} color={textColour}>
                        <Link to={"/"}>Rick And Morty</Link>
                    </Text>
                    <Spacer />
                    <Stack direction='row' spacing={4} align='center'>
                        <NavLink to={"/characters"}>
                            { ({ isActive }) => (
                                <Button colorScheme={textColour} bg={isActive ? 'yellow.500' : 'transparent'} 
                                _hover={hoverColour} 
                                variant={'ghost'}>Characters</Button>
                            ) }
                        </NavLink>
                        <NavLink to={"/locations"}>
                            { ({ isActive }) => (
                                <Button colorScheme={textColour} bg={isActive ? 'yellow.500' : 'transparent'} 
                                _hover={hoverColour} 
                                variant={'ghost'}>Locations</Button>
                            ) }
                        </NavLink>
                        <NavLink to={"/episodes"}>
                            { ({ isActive }) => (
                                <Button colorScheme={textColour} bg={isActive ? 'yellow.500' : 'transparent'} 
                                _hover={hoverColour} 
                                variant={'ghost'}>Episodes</Button>
                            ) }
                        </NavLink>
                        <Button onClick={toggleColorMode} colorScheme={textColour} 
                        _hover={hoverColour}  
                        variant='ghost'>
                            { colorMode === 'light' ? <IoMoon /> : <IoSunny /> }
                        </Button>
                    </Stack>
                </Flex>
            </Container>
        </div>
    );
}

export default Navbar;