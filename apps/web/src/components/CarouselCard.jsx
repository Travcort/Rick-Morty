import { Card, CardBody, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import morty1 from '../assets/morty1.jpg';
import morty2 from '../assets/morty2.jpg';
import morty3 from '../assets/morty3.jpg';
import morty4 from '../assets/morty4.jpg';
import morty5 from '../assets/morty5.jpg';
import morty6 from '../assets/morty6.jpg';


const CarouselCard = () => {

    const background = "transparent";

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false
    }

    const images = [
        { src: morty1, alt: "Rick and Morty" },
        { src: morty2, alt: "Rick and Morty" },
        { src: morty3, alt: "Rick and Morty" },
        { src: morty4, alt: "Rick and Morty" },
        { src: morty5, alt: "Rick and Morty" },
        { src: morty6, alt: "Rick and Morty" },
    ];  


    return (
        <Card variant={'elevated'} margin={'auto'} maxW={'sm'} mt={10} borderRadius={'lg'} bg={background}>
            <CardBody>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <Image key={index} src={img.src} alt={img.alt} objectFit={'cover'} borderRadius={'lg'}/>
                    ))}
                </Slider>
            </CardBody>
        </Card>
    );
}

export default CarouselCard;