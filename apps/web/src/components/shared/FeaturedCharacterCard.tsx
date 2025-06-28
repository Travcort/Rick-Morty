import { Dot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { CharacterTypes } from "shared/store/stateStore";

export const FeaturedCharacterCard = ({ name, image, status, species, location }: CharacterTypes) => {
    return (
        <Card className="flex bg-[var(--cardBackground)] text-[var(--generalText)]">
            <CardHeader>
                <CardTitle>{ name }</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
                <img
                src={ image }
                alt={ name }
                className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <Dot size={50} color={status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"} />
                        <span>{ status }</span>
                    </div>
                    <div>Species: { species }</div>
                    <div>Location: { location.name }</div>
                </div>
            </CardContent>
        </Card>
    );
}