import { Container, Divider, Stack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const background = useColorModeValue("#b7410e", "#daa520") // #daa520 - Golden Grass  #b7410e - Rust
    const textColour = useColorModeValue("whiteAlpha.900", "blackAlpha.900");
    const hoverColourLight = {
        bg: "#FF8C00", // pizzaz
        color: "white"
    };
    const hoverColourDark = {
        bg: "#d2691e", // Hot cinnamon
        color: "white"
    };

    const hoverColour = useColorModeValue(hoverColourLight, hoverColourDark);

    return (
        <Container bg={background} borderRadius={5} maxW={{base: '100%', sm: 'sm', lg: '70%'}}>
            <Stack direction={'row'} bg={background} mt={2} borderRadius={5} align={'center'} justify={'center'}>

                <NavLink to={'https://www.linkedin.com/in/tarvone/'} target={'_blank'}>
                    <IconButton icon={<FaLinkedin />} _hover={hoverColour} bg={background} color={textColour}/>
                </NavLink>
                <NavLink to={'https://github.com/Travcort'} target={'_blank'}>
                    <IconButton icon={<FaGithub />} _hover={hoverColour} bg={background} color={textColour}/>
                </NavLink>
                <NavLink to={'https://x.com/x_Tirva'} target={'_blank'}>
                    <IconButton icon={<FaSquareXTwitter />} _hover={hoverColour} color={textColour} bg={background}/>
                </NavLink>
                
            </Stack>
            <Divider />
            <Text align={'center'} color={textColour} fontWeight={'bold'}>&copy; 2024 Tirva &trade;</Text>
        </Container>
    );
}

export default Footer;