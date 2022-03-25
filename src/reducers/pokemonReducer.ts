import {BuscarPokemonType, SeleccionarPokemonType} from "../actions/pokemonActions";
import {Pokemon} from "../types/pokemon.types";

export type PokemonState = {
    busqueda: string;
    pokemonSeleccionado: Pokemon | null;
}

const pokemonReducer = (state={} as PokemonState, action: SeleccionarPokemonType | BuscarPokemonType) => {
    switch(action.type){
        case "BUSCAR_POKEMON":
            return {...state, busqueda: action.payload.name}
        case "SELECCIONAR_POKEMON":
            return {...state, pokemonSeleccionado: action.payload.pokemon}
        default:
            return state
    }
}
export default pokemonReducer;