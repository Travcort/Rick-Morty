import { createContext, useContext } from "react";
import { CharactersDropdownTypes, EpisodesDropdownTypes, LocationsDropdownTypes } from 'shared/store/dropdownStore';
import { ApiCharacterTypes, ApiEpisodeTypes, ApiLocationTypes } from "shared/store/stateStore";

export const MyAppContext = createContext<{ customTheme: "light"|"dark" } | null>(null);

export const useMyAppContext = () => {
  const ctx = useContext(MyAppContext);
  if (!ctx) throw new Error("useMyAppContext must be used inside provider");
  return ctx;
};

type CharactersContextProps = {
  dropDownData:  Array<CharactersDropdownTypes|LocationsDropdownTypes|EpisodesDropdownTypes>;

  characters: ApiCharacterTypes[];
  fetchCharacters: (url: string) => Promise<void>;
  fetchEpisodes: (url: string) => Promise<void>

  prevPage: string;
  nextPage: string;

  modal: boolean;
  closeModal: () => void;
  toggleModal: () => void;
};

export const CharactersContext = createContext<CharactersContextProps | null>(null);
export const useCharactersContext = () => {
    const ctx = useContext(CharactersContext);
    if (!ctx) throw new Error("useCharactersContext must be used inside provider");
    return ctx;
};

type LocationsContextProps = {
  dropDownData:  Array<CharactersDropdownTypes|LocationsDropdownTypes|EpisodesDropdownTypes>;

  locations: ApiLocationTypes[];
  fetchLocations: (url: string) => Promise<void>;
  fetchResidents: (url: string) => Promise<void>;

  prevPage: string;
  nextPage: string;

  modal: boolean;
  closeModal: () => void;
  toggleModal: () => void;
};

export const LocationsContext = createContext<LocationsContextProps | null>(null);
export const useLocationsContext = () => {
    const ctx = useContext(LocationsContext);
    if (!ctx) throw new Error("useLocationsContext must be used inside provider");
    return ctx;
};

type EpisodesContextProps = {
  dropDownData:  Array<CharactersDropdownTypes|LocationsDropdownTypes|EpisodesDropdownTypes>;

  episodes: ApiEpisodeTypes[];
  fetchEpisodes: (url: string) => Promise<void>;
  fetchCharacters: (url: string) => Promise<void>;

  prevPage: string;
  nextPage: string;

  modal: boolean;
  closeModal: () => void;
  toggleModal: () => void;
};

export const EpisodesContext = createContext<EpisodesContextProps | null>(null);
export const useEpisodesContext = () => {
    const ctx = useContext(EpisodesContext);
    if (!ctx) throw new Error("useEpisodesContext must be used inside provider");
    return ctx;
};