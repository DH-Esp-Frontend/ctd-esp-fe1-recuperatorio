import React, {FC, useEffect} from "react";
import PropTypes from "prop-types";
import {useQuery} from "react-query";
import {getPokemon} from "../queries/pokemon.queries";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../store/store";
import {Pokemon, PokemonWithProps} from "../types/pokemon.types";
import {agregarHistorialPokemon} from "../actions/pokemonActions";

type VistaPokemonDetalleProps = {
    pokemonSeleccionado: Pokemon;
}

const VistaPokemonDetalle:FC<VistaPokemonDetalleProps> = ({pokemonSeleccionado}: VistaPokemonDetalleProps) => {
    const dispatch = useDispatch();
    const {data: pokemon, isLoading, refetch} = useQuery<PokemonWithProps>("obtenerPokemon",
        () => getPokemon(pokemonSeleccionado.name),
        {onSuccess: (data) => {
                dispatch(agregarHistorialPokemon(data));
            }}
        );

    useEffect(() => {
        if (pokemonSeleccionado) {
            refetch();
        }
    }, [refetch, pokemonSeleccionado, pokemonSeleccionado?.name])
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
    const pokemonSeleccionado = useSelector<IRootState, Pokemon | null>(state => state.pokemon.pokemonSeleccionado)
    if (!pokemonSeleccionado) return <div className="vistaPokemon"/>;
    //
    return <VistaPokemonDetalle pokemonSeleccionado={pokemonSeleccionado} />

}

VistaPokemon.propTypes = {
    item:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default VistaPokemon;
