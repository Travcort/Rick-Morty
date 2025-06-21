import { useEffect, useState } from 'react';
import { Container, Text } from "@chakra-ui/react";

const headliners = [
    "Morty, it's not just about showing up—it's about showing up with style… and maybe a portal gun.",
    "When life hands you lemons, check if they’re from an alien planet.",
    "Reality’s just a suggestion—unless it’s Monday.",
    "My mood? Somewhere between ‘show me what you got’ and ‘existence is pain.’",
    "In a world full of Jerrys, be a Rick.",
    "I’m not procrastinating; I’m just stuck in a parallel universe.",
    "Parallel dimensions can wait—coffee first.",
    "Parallel universes? Nah, I barely have it together in one.",
    "The best things in life are free—unless they’re from the Citadel of Ricks.",
    "I’m not lazy; I’m just buffering between dimensions."  
];

const TypeWriter = () => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [headlineIndex, setHeadlineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [blinking, setBlinking] = useState(true);

    const background = "transparent";

    useEffect(() => {
        // Blinking cursor toggle
        const blinkInterval = setInterval(() => {
            setBlinking((prev) => !prev);
        }, 500);

        return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
        const currentText = headliners[headlineIndex];
        
        if (isTyping) {
            // Typing effect
            if (charIndex < currentText.length) {
                const typingTimeout = setTimeout(() => {
                    setText((prev) => prev + currentText[charIndex]);
                    setCharIndex(charIndex + 1);
                }, 100); // Adjust speed as needed

                return () => clearTimeout(typingTimeout);
            } 
            else {
                // Finished typing, pause then switch to deleting
                setTimeout(() => setIsTyping(false), 3000);
            }
        } 
        else {
            // Erasing effect
            if (charIndex > 0) {
                const erasingTimeout = setTimeout(() => {
                    setText((prev) => prev.slice(0, -1));
                    setCharIndex(charIndex - 1);
                }, 50); // Adjust erasing speed as needed

                return () => clearTimeout(erasingTimeout);
            } 
            else {
                // Finished erasing, reset for the next headline
                setIsTyping(true);
                setHeadlineIndex((prev) => (prev + 1) % headliners.length);
            }
        }
    }, [charIndex, isTyping, headlineIndex]);

    return (
        <Container bg={background} maxW={'sm'} minH={'sm'} mt={15} borderRadius={'lg'}>
            <Text 
                fontSize={'2xl'}
                fontFamily={'monospace'}
                fontWeight='bold'
                align={"center"}
            >
                {text}<span style={{ opacity: blinking ? 1 : 0 }}>|</span>
            </Text>
        </Container>
    );
};

export default TypeWriter;
