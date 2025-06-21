import { create } from 'zustand';

const useStore = create((set) => ({
    isLoading: true,

    nextPage: '',
    prevPage: '',

    characters: [],
    fetchCharacters: async (url) => {
        try {
            set({ isLoading: true });
            const response = await fetch(url);
            const data = await response.json();
            set({ characters: data.results });
            set({ nextPage: data.info?.next });
            set({ prevPage: data.info?.prev });
        } 
        catch (error) {
            console.error(error)
        }
        finally {
            set({ isLoading: false });
        }
    },

    characterEpisodes: [],
    storeEpisodes: async (url) => {
        try {
            set({ isLoading: true });
            const response = await fetch(url);
            const data = await response.json();
            const charEpisodes = data?.episode
            const episodesData = await Promise.all(
                charEpisodes.map( async (url) => {
                    try {
                        const res = await fetch(url);
                        return await res.json();
                        
                    } catch (error) {
                        console.error(`Failed to fetch ${url}:`, error.message);
                        return null;
                    }
                })
            ).then((response) => response.filter(Boolean));

            set({ characterEpisodes: episodesData });
        } catch (error) {
            console.error(error);
        }
        finally {
            set({ isLoading: false });
        }
    },

    // Search Functions
    searchFilter: '',
    setSearchFilter: (filter) => set({ searchFilter: filter }),
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),
    filteredData: [],
    fetchFilteredData: async (url) => {
        try {
            set({ isLoading: true });
            const response = await fetch(url);
            const data = await response.json();
            set({ filteredData: data.results });
            set({ nextPage: data.info?.next });
            set({ prevPage: data.info?.prev });
        } catch (error) {
            console.error(error);
        }
        finally {
            set({ isLoading: false });
        }
    },


    locations: [],
    fetchLocations: async (url) => {
        try {
            set({ isLoading: true });
            const response = await fetch(url);
            const data = await response.json();
            set({ locations: data.results });
            set({ nextPage: data.info?.next });
            set({ prevPage: data.info?.prev });
        } catch (error) {
            console.error(error);
        }
        finally {
            set({ isLoading: false });
        }
    },

    locationFilter: '',
    setLocationFilter: (filter) => set({ locationFilter: filter }),
    locationQuery: '',
    setLocationQuery: (query) => set({ locationQuery: query }),
    filteredLocations: [],
    fetchFilteredLocations: async (url) => {
        try {
            set({ isLoading: true });
            const response = await fetch(url);
            const data = await response.json();
            set({ filteredLocations: data.results });
            set({ nextPage: data.info?.next });
            set({ prevPage: data.info?.prev });
        } catch (error) {
            console.error(error);
        }
        finally {
            set({ isLoading: false });
        }
    },

    locationResidents: [],
    storeResidents: async (url) => {
        try {
            set({ isLoading: true });
            const response = await fetch(url);
            const data = await response.json();
            const people = data?.residents;
            const residentsData = await Promise.all(
                people.map( async (url) => {
                    try {
                        const res = await fetch(url);
                        return await res.json();
                    } catch (error) {
                        console.error(`Error fetching ${url}:`, error.message);
                        return null;
                    }
                })
            ).then((response) => response.filter(Boolean));

            set({ locationResidents: residentsData });
        } catch (error) {
            console.error(error);
        }
        finally {
            set({ isLoading: false });
        }
    },


    episodes: [],
    fetchEpisodes: async (url) => {
            try {
                if (!url) return
                set({ isLoading: true });
                const response = await fetch(url);
                const data = await response.json();
                set({ episodes: data.results });
                set({ nextPage: data.info?.next });
                set({ prevPage: data.info?.prev });
            } catch (error) {
                console.error(error);
            } 
            finally {
                set({ isLoading: false });
            }
    },

    episodeCharacters: [],
    storeCharacters: async (url) => {
        try {
            set({ isLoading: true });
            const response = await fetch(url);
            const data = await response.json();
            const people = data?.characters
            const charactersData = await Promise.all(
                people.map( async (url) => {
                    try {
                        const res = await fetch(url);
                        return await res.json();
                        
                    } catch (error) {
                        console.error(`Failed to fetch ${url}:`, error.message);
                        return null;
                    }
                })
            ).then((response) => response.filter(Boolean));

            set({ episodeCharacters: charactersData });
        } catch (error) {
            console.error(error);
        }
        finally {
            set({ isLoading: false });
        }
    }
}))

export default useStore;