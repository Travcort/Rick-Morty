import { create } from 'zustand';

const useData = create((set) => ({
    characters: [],
    getCharacters: async (id) => {
        const response = await fetch(`/api/character/${id}`);
        const data = await response.json();
        set({characters: data.message});
    },
    locations: [],
    getLocations: async(id) => {
        const response = await fetch(`/api/location/${id}`);
        const data = await response.json();
        set({locations: data.message});
    },
    episodes: [],
    getEpisodes: async(id) => {
        const response = await fetch(`/api/episode/${id}`);
        const data = await response.json();
        set({episodes: data.message});
    }
}))

export default useData;