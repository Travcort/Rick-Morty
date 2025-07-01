import type { LocationTypes } from "shared/store/stateStore";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export const LocationCard = ({ id, name, type, dimension, fetchResidents }: LocationTypes) => {
    const navigate = useNavigate();
    return (
        <Card className="flex bg-[var(--cardBackground)] my-2 max-w-full md:max-w-sm shadow-lg rounded-lg overflow-hidden">
            <CardContent className="flex flex-col md:flex-row md:items-start p-4 gap-4 w-full">
                <div className="flex flex-col">
                    <div className="text-sm text-[var(--generalText)]">{ id }</div>
                    <div className="text-xl font-bold text-[var(--generalText)]">{ name }</div>
                    <br />
                    <div className="text-sm text-[var(--generalText)]">Type: { type }</div>
                    <div className="text-sm text-[var(--generalText)]">Dimension: { dimension }</div>
                    <Button className="mt-3 max-w-max" 
                        onClick={() => {fetchResidents(`https://rickandmortyapi.com/api/location/${id}`); navigate(`/location/${id}/residents`)}}>
                            Residents
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}