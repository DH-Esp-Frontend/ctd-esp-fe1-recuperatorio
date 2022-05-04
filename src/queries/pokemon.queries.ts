import {Pokemon, PokemonWithProps} from "../types/pokemon.types";

export const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results;
};

export const buscarPokemons = async (pokemonName: string): Promise<Pokemon[]> => {
    const data = await getPokemons();
    return data.filter(pokemon => !pokemonName || pokemon.name?.toLowerCase().startsWith(pokemonName?.toLowerCase()))
};

export const getPokemon = async (pokemonName: string): Promise<PokemonWithProps> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    const data = await response.json();
    return data;
};


let history:PokemonWithProps[] = [];
export const fetchHistory = async (): Promise<PokemonWithProps[]> => {
    return new Promise((resolve) => {
        resolve(history);
    });
};

export const addToHistory = async (pokemon: PokemonWithProps): Promise<PokemonWithProps> => {
    return new Promise((resolve) => {
        history = [pokemon, ...history.filter(p => p.name !== pokemon.name)]
        resolve(pokemon);
    });
};

export const removeFromHistory = async (pokemon: PokemonWithProps): Promise<PokemonWithProps> => {
    return new Promise((resolve) => {
        history = [...history.filter(p => p.name !== pokemon.name)]
        resolve(pokemon);
    });
};

export const clearFromHistory = async (): Promise<PokemonWithProps[]> => {
    return new Promise((resolve) => {
        history = []
        resolve([]);
    });
};