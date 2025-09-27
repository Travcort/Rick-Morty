import { create } from 'zustand';

export type CharacterTypes = {
    id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  fetchEpisodes: (url: string) => Promise<void>;
  episodes?: string[];
}

export type ApiCharacterTypes = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    }
    location: {
        name: string;
        url: string;
    }
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}

export type LocationTypes = {
    id: string;
    name: string;
    type: string;
    dimension: string;
    fetchResidents: (url: string) => Promise<void>;
    residents?: ApiCharacterTypes[];
}

export type ApiLocationTypes = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Array<string>;
    url: string;
    created: string;
}

export type EpisodeTypes = {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    fetchCharacters: (url: string) => Promise<void>;
    characters?: string[];
}

export type ApiEpisodeTypes = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: Array<string>;
    url: string;
    created: string;
}

export type PaginationButtonsTypes = {
    prevPage?: string;
    nextPage?: string;
    getData: (page: string) => void;
}

interface StoreState {
  isLoading: boolean;
  nextPage: string;
  prevPage: string;

  characters: ApiCharacterTypes[];
  fetchCharacters: (url: string) => Promise<void>;

  characterEpisodes: EpisodeTypes[];
  storeEpisodes: (url: string) => Promise<void>;

  searchFilter: string;
  setSearchFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredData: CharacterTypes[] | LocationTypes[] | EpisodeTypes[];
  fetchFilteredData: (url: string) => Promise<void>;

  locations: ApiLocationTypes[];
  fetchLocations: (url: string) => Promise<void>;
  locationFilter: string;
  setLocationFilter: (filter: string) => void;
  locationQuery: string;
  setLocationQuery: (query: string) => void;
  filteredLocations: LocationTypes[];
  fetchFilteredLocations: (url: string) => Promise<void>;

  locationResidents: CharacterTypes[];
  storeResidents: (url: string) => Promise<void>;

  episodes: ApiEpisodeTypes[];
  fetchEpisodes: (url: string) => Promise<void>;

  episodeCharacters: CharacterTypes[];
  storeCharacters: (url: string) => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
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
                charEpisodes.map( async (url: string) => {
                    try {
                        const res = await fetch(url);
                        return await res.json();
                        
                    } catch (error: unknown) {
                        if (error instanceof Error) {
                            console.error(`Failed to fetch ${url}:`, error.message);
                        }
                        else {
                            console.error(`Failed to fetch ${url}:`, error);
                        }
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
                people.map( async (url: string) => {
                    try {
                        const res = await fetch(url);
                        return await res.json();
                    } catch (error: unknown) {
                        if (error instanceof Error) {
                            console.error(`Error fetching ${url}:`, error.message);
                        } else {
                            console.error(`Error fetching ${url}:`, error);
                        }
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
                people.map( async (url: string) => {
                    try {
                        const res = await fetch(url);
                        return await res.json();
                        
                    } catch (error) {
                        if (error instanceof Error) {
                            console.error(`Failed to fetch ${url}:`, error.message);
                        } else {
                            console.error(`Failed to fetch ${url}:`, error);
                        }
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