import {AgregarHistorialPokemonType, BuscarPokemonType, SeleccionarPokemonType} from "../actions/pokemonActions";
import {Pokemon, PokemonWithProps} from "../types/pokemon.types";

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

const pokemonReducer = (state: PokemonState = initialState, action: SeleccionarPokemonType | BuscarPokemonType | AgregarHistorialPokemonType) => {
    switch(action.type){
        case "BUSCAR_POKEMON":
            return {...state, busqueda: action.payload.name}
        case "SELECCIONAR_POKEMON":
            return {
                ...state,
                pokemonSeleccionado: action.payload.pokemon,
            }
        case "AGREGAR_HISTORIAL_POKEMON":
            return {
                ...state,
                historial: [action.payload.pokemon, ...state.historial.filter(pokemon => pokemon.name !== action.payload.pokemon.name)]
            }
        default:
            return state
    }
}
export default pokemonReducer;