import {Pokemon, PokemonWithProps} from "../types/pokemon.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export type PokemonState = {
    busqueda: string;
    pokemonSeleccionado: Pokemon | null;
    historial: PokemonWithProps[];
}

const initialState: PokemonState = {
    busqueda: '',
    historial: [],
    pokemonSeleccionado: null
};

export const pokemonSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        buscarPokemon: (state, action: PayloadAction<string>) => {
            state.busqueda = action.payload
        },
        seleccionarPokemon: (state, action: PayloadAction<Pokemon>) => {
            state.pokemonSeleccionado = action.payload
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        agregarPokemonAlHistorial: (state, action: PayloadAction<PokemonWithProps>) => {
            state.historial = [action.payload, ...state.historial.filter(pokemon => pokemon.name !== action.payload.name)]
        },
    },
});

export const { buscarPokemon, seleccionarPokemon, agregarPokemonAlHistorial } = pokemonSlice.actions

export const selectHistorial = (state: RootState) => state.pokemon.historial;
export const selectBusqueda = (state: RootState) => state.pokemon.busqueda;
export const selectPokemonSeleccionado = (state: RootState) => state.pokemon.pokemonSeleccionado;

export default pokemonSlice.reducer;