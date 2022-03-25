import React, {FC, useEffect} from "react";
import PropTypes from "prop-types";
import {useQuery} from "react-query";
import {getPokemon} from "../queries/pokemon.queries";
import {useSelector} from "react-redux";
import {IRootState} from "../store/store";
import {Pokemon} from "../types/pokemon.types";

type VistaPokemonDetalleProps = {
    pokemonSeleccionado: Pokemon;
}

const VistaPokemonDetalle:FC<VistaPokemonDetalleProps> = ({pokemonSeleccionado}: VistaPokemonDetalleProps) => {
    const {data: pokemon, isLoading, refetch} = useQuery("obtenerPokemon",
        () => getPokemon(pokemonSeleccionado.name),
        );

    useEffect(() => {
        if (pokemonSeleccionado) {
            refetch();
        }
    }, [pokemonSeleccionado?.name])
    if (isLoading) return <div>Cargando pokemon...</div>

    return pokemon ? (
        <div className="vistaPokemon">
            <h4>Pokemon: {pokemon.name}</h4>
            <h5>#{pokemon.id}</h5>
            <img src={pokemon.sprites.other.home.front_default} />
        </div>
    ): null;
}

const VistaPokemon = () => {
    // Utilizamos useQuery para obtener el pokemon que viene de redux
    const pokemonSeleccionado = useSelector<IRootState, Pokemon | null>(state => state.pokemon.pokemonSeleccionado)
    if (!pokemonSeleccionado) return <></>;
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
