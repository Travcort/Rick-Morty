import { Card, CardContent } from "@/components/ui/card";
import { Dot } from 'lucide-react';
import type { CharacterTypes } from "shared/store/stateStore";
import { ImageComponent } from "./ImageComponent";

export const CharacterCard = ({ id, name, image, status, species, gender, origin, location, getEpisodes }: CharacterTypes) => {
    return (
        <Card className="flex bg-[var(--cardBackground)] my-2 max-w-full md:max-w-sm shadow-lg rounded-lg overflow-hidden">
            <CardContent className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 w-full">
                <ImageComponent image={image} name={name} />
                <div className="flex flex-col">
                    <div className="text-sm text-[var(--generalText)]">{ id }</div>
                    <div className="text-xl font-bold text-[var(--generalText)]">{ name }</div>
                    <div className="flex items-center">
                        <Dot size={50} color={status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"} />
                        <p className="text-sm text-[var(--generalText)]">{status}</p>
                    </div>
                    <div className="text-sm text-[var(--generalText)]">Species: { species }</div>
                    <div className="text-sm text-[var(--generalText)]">Gender: { gender }</div>
                    <div className="text-sm text-[var(--generalText)]">Origin: { origin?.name }</div>
                    <div className="text-sm text-[var(--generalText)]">Location: { location?.name }</div>
                </div>
            </CardContent>
        </Card>
    );
}