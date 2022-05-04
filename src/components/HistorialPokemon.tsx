import React, {useEffect, useState} from "react";
import {PokemonWithProps} from "../types/pokemon.types";
import {useDispatch} from "react-redux";
import {seleccionarPokemon} from "../actions/pokemonActions";
import {clearFromHistory, fetchHistory} from "../queries/pokemon.queries";

const HistorialPokemon = () => {
    const [pokemons,setPokemons] = useState<PokemonWithProps[]>([]);

    useEffect(() => {
        refresh();
    },[])

    // CASO 3
    // Reemplazar esta implementacion por un Thunk (en TS)
    // Crear un nuevo reducer para manejar el historial
    // Documentar tanto el thunk como el reducer
    const refresh = () => {
        fetchHistory().then((history: PokemonWithProps[]) => {
            setPokemons(history);
        })
    }
    const clear = () => {
        clearFromHistory().then((newHistory: PokemonWithProps[]) => {
            setPokemons(newHistory);
        })
    }

    const dispatch = useDispatch();
    const onSelectPokemon = (pokemon: PokemonWithProps) =>{
        dispatch(seleccionarPokemon(pokemon));
    }

    return (
        <div className="listado">
            <h3>Historial</h3>
            <button onClick={() => refresh()}>Actualizar</button>
            <button onClick={() => clear()}>Limpiar</button>
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
