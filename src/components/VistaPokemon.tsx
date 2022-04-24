import React, {FC, useEffect, useState} from "react";
import {getPokemon} from "../queries/pokemon.queries";
import {Pokemon, PokemonWithProps} from "../types/pokemon.types";
import {useAppDispatch, useAppSelector} from "../store/store";
import {agregarPokemonAlHistorial, selectPokemonSeleccionado} from "../reducers/pokemonReducer";

type VistaPokemonDetalleProps = {
    pokemonSeleccionado: Pokemon;
}

const VistaPokemonDetalle:FC<VistaPokemonDetalleProps> = ({pokemonSeleccionado}: VistaPokemonDetalleProps) => {
    const dispatch = useAppDispatch();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<PokemonWithProps | null>(null);

    useEffect(() => {
        if (pokemonSeleccionado) {
            setLoading(true);
            getPokemon(pokemonSeleccionado.name).then((data) => {
                setPokemon(data);
                setLoading(false);
                dispatch(agregarPokemonAlHistorial(data));
            })
        }
    }, [pokemonSeleccionado, pokemonSeleccionado?.name])

    if (isLoading) return <div>Cargando pokemon...</div>

    return pokemon ? (
        <div className="vistaPokemon">
            <h4>Pokemon: {pokemon.name}</h4>
            <h5>#{pokemon.id}</h5>
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
        </div>
    ): null;
}

const VistaPokemon = () => {
    // Utilizamos useQuery para obtener el pokemon que viene de redux
    // @ts-ignore
    const pokemonSeleccionado = useAppSelector(selectPokemonSeleccionado)
    if (!pokemonSeleccionado) return <div className="vistaPokemon"/>;
    //
    return <VistaPokemonDetalle pokemonSeleccionado={pokemonSeleccionado} />

}

export default VistaPokemon;
