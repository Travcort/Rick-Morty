import { useColorMode, useDisclosure, Button, Container, Flex,  Stack,  Spacer,  Text, useColorModeValue, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody  } from '@chakra-ui/react'
import { IoSunny, IoMoon,IoMenu } from "react-icons/io5"; 
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const textColour = useColorModeValue("whiteAlpha.900", "blackAlpha.900");
    const hoverColour = {
        bg: "blue.800",
        color: "white"
    };

    return(
        <div>
            <Container borderRadius={10} bg={useColorModeValue("purple.600", "yellow")} maxW={{base:"100%", sm: "60%", md: "container.md", lg: "container.lg"}}>
                <Flex alignItems={"center"} padding={2}>
                    <Text fontWeight={'bold'} color={textColour}>
                        <Link to={"/"}>Rick And Morty</Link>
                    </Text>

                    <Spacer />

                    <Stack direction='row' spacing={4} align='center' display={{ base: "none", md: "flex" }}>
                        {['characters', 'locations', 'episodes'].map((path) => (
                            <NavLink key={path} to={`/${path}`}>
                                {({ isActive }) => (
                                    <Button color={textColour} bg={isActive ? 'blue.900' : 'transparent'} variant="ghost" _hover={hoverColour} onClick={onClose} >
                                        {path.charAt(0).toUpperCase() + path.slice(1)}
                                    </Button>
                                )}
                            </NavLink>
                        ))}
                        <Button onClick={toggleColorMode} colorScheme={textColour} _hover={hoverColour} variant='ghost'>
                            { colorMode === 'light' ? <IoMoon /> : <IoSunny /> }
                        </Button>
                    </Stack>

                        {/* Hamburger Menu Icon for Mobile Screens*/}
                    <Box display={{ base: "block", md: "none" }}>
                        <IconButton
                            icon={<IoMenu />}
                            colorScheme={textColour}
                            onClick={onOpen}
                            variant="ghost"
                            _hover={hoverColour} 
                            aria-label="Open Menu"
                        />
                    </Box>

                        {/* Drawer for mobile screens */}
                    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody>
                                <Stack spacing={4} mt={6}>
                                    {['characters', 'locations', 'episodes'].map((path) => (
                                        <NavLink key={path} to={`/${path}`}>
                                            {({ isActive }) => (
                                                <Button color={textColour} bg={isActive ? 'blue.900' : 'transparent'} variant="ghost" _hover={hoverColour} onClick={onClose} >
                                                    {path.charAt(0).toUpperCase() + path.slice(1)}
                                                </Button>
                                            )}
                                        </NavLink>
                                    ))}
                                    <Button
                                        onClick={() => {
                                        toggleColorMode();
                                        }}
                                        color={textColour}
                                        _hover={hoverColour}
                                        variant="ghost"
                                    >
                                        {colorMode === 'light' ? <IoMoon /> : <IoSunny />}
                                    </Button>

                                    <Text align={"center"}>
                                        Made with ❤ by Tarv 
                                    </Text>
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Container>
        </div>
    );
}

export default Navbar;