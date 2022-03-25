import React, {useEffect, useState} from "react";
import {Pokemon, PokemonWithProps} from "../types/pokemon.types";

const HistorialPokemon = () => {
    const [pokemons, setPokemons] = useState<PokemonWithProps[]>([
        {
            id: 4,
            name: 'Charmander',
            url: '',
            sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', other: {home: {front_default: ''}}}
        }
    ]);
    const onSelectPokemon = (pokemon: PokemonWithProps) =>{
        // TODO seleccionar pokemon
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
