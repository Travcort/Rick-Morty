import { create } from 'zustand';

const useData = create((set) => ({
    characters: [],
    getCharacters: async () => {
        const response = await fetch('/api/character/9');
        const data = await response.json();
        set({characters: data.message});
    } 
}))

export default useData;