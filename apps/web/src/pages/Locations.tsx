import useStore, { type LocationTypes } from "shared/store/stateStore";
import EndpointsLayout from "./EndpointsLayout";
import { useEffect } from "react";
import { LocationCard } from "@/components/shared/LocationCard";

export default function LocationsPage() {
    const isLoading = useStore((state) => state.isLoading);
    const prevPage = useStore((state) => state.prevPage);
    const nextPage = useStore((state) => state.nextPage);
    const locations = useStore((state) => state.locations);
    const fetchLocations = useStore((state) => state.fetchLocations);
    // const fetchResidents = useStore((state) => state.storeResidents);

    useEffect(() => {
        fetchLocations('https://rickandmortyapi.com/api/location')
    }, []);

    return (
        <EndpointsLayout 
            isLoading={isLoading}
            prevPage={prevPage}
            nextPage={nextPage}
            items={locations}
            fetchData={fetchLocations}
            renderItem={(location: LocationTypes) => (
                <LocationCard 
                    key={location.id}
                    id={location.id}
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                />
            )}
        />
    );
}