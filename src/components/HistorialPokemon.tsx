import React from "react";
import {PokemonWithProps} from "../types/pokemon.types";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../store/store";
import {seleccionarPokemon} from "../actions/pokemonActions";

const HistorialPokemon = () => {
    const pokemons = useSelector<IRootState, PokemonWithProps[]>(state => state.pokemon.historial)
    const dispatch = useDispatch();
    const onSelectPokemon = (pokemon: PokemonWithProps) =>{
        dispatch(seleccionarPokemon(pokemon));
    }

    return (
        <div className="listado">
            <h3>Historial</h3>
            {pokemons && pokemons.map((pokemon: PokemonWithProps) => (
                <div style={{display: 'flex', cursor: 'pointer'}} onClick={() => onSelectPokemon(pokemon)}>
                    <img src={pokemon.sprites.front_default} />
                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <p>{pokemon.name}</p>
                        <small>#{pokemon.id}</small>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HistorialPokemon;
