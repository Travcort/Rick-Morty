import type { EpisodeTypes } from "shared/store/stateStore";
import { Card, CardContent } from "../ui/card";

export const EpisodeCard = ({ id, name, episode, air_date, characters }: EpisodeTypes) => {
    return (
        <Card className="flex bg-[var(--cardBackground)] my-2 max-w-full md:max-w-sm shadow-lg rounded-lg overflow-hidden">
            <CardContent className="flex flex-col md:flex-row md:items-start p-4 gap-4 w-full">
                <div className="flex flex-col">
                    <div className="text-sm text-[var(--generalText)]">{ id }</div>
                    <div className="text-xl font-bold text-[var(--generalText)]">{ name }</div>
                    <div className="text-sm text-[var(--generalText)]">Episode: { episode }</div>
                    <div className="text-sm text-[var(--generalText)]">Air Date: { air_date }</div>
                </div>
            </CardContent>
        </Card>
    );
}