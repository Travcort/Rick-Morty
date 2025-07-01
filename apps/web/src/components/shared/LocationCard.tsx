import type { LocationTypes } from "shared/store/stateStore";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export const LocationCard = ({ id, name, type, dimension, fetchResidents }: LocationTypes) => {
    return (
        <Card className="flex bg-[var(--cardBackground)] my-2 max-w-full md:max-w-sm shadow-lg rounded-lg overflow-hidden">
            <CardContent className="flex flex-col md:flex-row md:items-start p-4 gap-4 w-full">
                <div className="flex flex-col">
                    <div className="text-sm text-[var(--generalText)]">{ id }</div>
                    <div className="text-xl font-bold text-[var(--generalText)]">{ name }</div>
                    <br />
                    <div className="text-sm text-[var(--generalText)]">Type: { type }</div>
                    <div className="text-sm text-[var(--generalText)]">Dimension: { dimension }</div>
                    {/* <div className="text-sm text-[var(--generalText)]">Residents: { residents }</div> */}
                    <Button onClick={() => fetchResidents(`https://rickandmortyapi.com/api/location/${id}`)}>Residents</Button>
                </div>
            </CardContent>
        </Card>
    );
}