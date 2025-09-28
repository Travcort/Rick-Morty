import useStore, { type ApiLocationTypes } from "shared/store/stateStore";
import EndpointsLayout from "./EndpointsLayout";
import { useEffect } from "react";
import { LocationCard } from "@/components/shared/LocationCard";
import { useParams } from "react-router";

export default function LocationsPage() {
    const { id, filtered } = useParams();
    const isLoading = useStore((state) => state.isLoading);
    const prevPage = useStore((state) => state.prevPage);
    const nextPage = useStore((state) => state.nextPage);

    const locations = useStore((state) => {
        if(filtered) return state.filteredData as ApiLocationTypes[];
        return state.locations;
    });
    const fetchLocations = useStore((state) => filtered ? state.fetchFilteredData : state.fetchLocations);
    const fetchResidents = useStore((state) => state.storeResidents);
    const locationResidents = useStore((state) => state.locationResidents);

    useEffect(() => {
        if(!id) {
            fetchLocations('https://rickandmortyapi.com/api/location')
        }
    }, [id, fetchLocations]);

    return (
        <EndpointsLayout 
            isLoading={isLoading}
            prevPage={prevPage}
            nextPage={nextPage}
            items={locations}
            {...(!id && { fetchData: fetchLocations })}
            renderItem={(location: ApiLocationTypes) => (
                <LocationCard 
                    key={location.id}
                    id={location.id}
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                    fetchResidents={fetchResidents}
                    residents={locationResidents}
                />
            )}
        />
    );
}