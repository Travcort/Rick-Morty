import { create } from 'zustand';

const useData = create((set) => ({
    characters: [],
    getCharacters: async (id) => {
        const response = await fetch(`/api/character/${id}`);
        const data = await response.json();
        set({characters: data.message});
    }
}))

export default useData;