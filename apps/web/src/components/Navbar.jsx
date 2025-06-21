import { useColorMode, useDisclosure, Button, Container, Flex,  Stack,  Spacer,  Text, useColorModeValue, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, DrawerFooter, Badge  } from '@chakra-ui/react'
import { IoSunny, IoMoon,IoMenu } from "react-icons/io5"; 
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const textColour = useColorModeValue("whiteAlpha.900", "blackAlpha.900");
    const background = useColorModeValue("#b7410e", "#daa520") // #daa520 - Golden Grass  #b7410e - Rust
    const hoverColourLight = {
        bg: "#FF8C00", // pizzaz
        color: "white"
    };
    const hoverColourDark = {
        bg: "#d2691e", // Hot cinnamon
        color: "white"
    };

    const hoverColour = useColorModeValue(hoverColourLight, hoverColourDark);

    return(
        <div>
            <Container borderRadius={10} bg={background} maxW={{base:"100%", sm: "100px", md: "container.md", lg: "container.lg"}}>
                <Flex alignItems={"center"} padding={2}>
                    <Text fontWeight={'extrabold'} fontSize={'xl'} color={textColour}>
                        <Link to={"/"}>Rick And Morty
                            <Badge ml={1} variant={'subtle'} textTransform={'smallcase'} size={'sm'} color={'green.900'}>v1.0</Badge>
                        </Link>
                    </Text>

                    <Spacer />

                    <Stack direction='row' spacing={4} align='center' display={{ base: "none", md: "flex" }}>
                        {['characters', 'locations', 'episodes'].map((path) => (
                            <NavLink key={path} to={`/${path}`}>
                                {({ isActive }) => (
                                    <Button color={textColour} bg={isActive ? 'gray.700' : 'transparent'} variant="ghost" _hover={hoverColour} onClick={onClose} >
                                        {path.charAt(0).toUpperCase() + path.slice(1)}
                                    </Button>
                                )}
                            </NavLink>
                        ))}
                        <Button onClick={toggleColorMode} color={textColour} _hover={hoverColour} variant='ghost'>
                            { colorMode === 'light' ? <IoMoon /> : <IoSunny /> }
                        </Button>
                    </Stack>

                        {/* Hamburger Menu Icon for Mobile Screens*/}
                    <Box display={{ base: "block", md: "none" }}>
                        <IconButton
                            icon={<IoMenu />}
                            color={textColour}
                            onClick={onOpen}
                            variant="ghost"
                            _hover={hoverColour} 
                            aria-label="Open Menu"
                        />
                    </Box>

                        {/* Drawer for mobile screens */}
                    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent bg={background}>
                            <DrawerCloseButton color={textColour} _hover={hoverColour} />
                            <DrawerBody>
                                <Stack spacing={4} mt={6}>
                                    {['characters', 'locations', 'episodes'].map((path) => (
                                        <NavLink key={path} to={`/${path}`}>
                                            {({ isActive }) => (
                                                <Button color={textColour} bg={isActive ? 'gray.700' : 'transparent'} variant="ghost" _hover={hoverColour} onClick={onClose} >
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

                                    <Text align={"center"} color={textColour} fontWeight={'bold'}>
                                        Made with ❤ by Tarv 
                                    </Text>
                                </Stack>
                            </DrawerBody>
                            <DrawerFooter>
                                <Footer />
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Container>
        </div>
    );
}

export default Navbar;