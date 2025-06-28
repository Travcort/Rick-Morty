import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { NavLink } from "react-router";
import { Menu } from 'lucide-react';
import rickyImage from "@/assets/rick-sanchez.png";
import mortyImage from "@/assets/morty.png";
import bethImage from "@/assets/beth-smith.png";
import summerImage from "@/assets/summer-smith.png";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
    const carouselData = [
        {name: "Morty", image: mortyImage},
        {name: "Rick Sanchez", image: rickyImage},
        {name: "Beth Smith", image: bethImage},
        {name: "Summer Smith", image: summerImage}
    ]

    return (
        <div className="flex bg-[var(--cardBackground)] justify-between sticky top-3 max-w-xl mx-auto rounded-lg px-4 py-2 shadow-sm">
            <div className="flex items-center">
                <Carousel
                    plugins={[
                        Autoplay({
                        delay: 5000,
                        }),
                    ]}
                    className="w-auto"
                >
                    <CarouselContent className="max-w-15 max-h-10">
                        {carouselData.map((character) => (
                            <CarouselItem key={character.name}>
                                <Avatar>
                                    <AvatarImage src={character.image} />
                                    <AvatarFallback>{character.name}</AvatarFallback>
                                </Avatar>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Badge className="text-[var(--generalText)] text-xs font-semibold px-2 py-1 border border-[var(--generalText)]" variant="outline">v2.0</Badge>
            </div>

            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex gap-6 text-sm font-medium">
                
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <NavLink className="text-[var(--generalText)]" to="/">Home</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <NavLink className="text-[var(--generalText)]" to="/characters">Characters</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <NavLink className="text-[var(--generalText)]" to="/locations">Locations</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <NavLink className="text-[var(--generalText)]" to="/episodes">Episodes</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className=" flex gap-3">
                <ModeToggle />

                <Sheet>
                    <SheetTrigger className="bg-[var(--cardBackground)]">
                        <Menu className="text-[var(--generalText)]" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle className="text-center text-lg font-semibold">Rick and Morty</SheetTitle>
                        </SheetHeader>

                        <div className="flex flex-col gap-2 mt-6 px-4">
                            <Button className="bg-[var(--cardBackground)]" asChild>
                                <NavLink to="/">Home</NavLink>
                            </Button>
                            <Button className="bg-[var(--cardBackground)]" asChild>
                                <NavLink to="/characters">Characters</NavLink>
                            </Button>
                            <Button className="bg-[var(--cardBackground)]" asChild>
                                <NavLink to="/locations">Locations</NavLink>
                            </Button>
                            <Button className="bg-[var(--cardBackground)]" asChild>
                                <NavLink to="/episodes">Episodes</NavLink>
                            </Button>
                        </div>

                        <ModeToggle />
                    </SheetContent>
                </Sheet>
            </div>
            
        </div>
    );
}

export default Navbar;