import React from "react";
import PropTypes from "prop-types";
import {useQuery} from "react-query";
import {getPokemon} from "../queries/pokemon.queries";

const VistaPokemon = () => {
    // Utilizamos useQuery para obtener el pokemon que viene de redux
    const {data: pokemon, isLoading} = useQuery("obtenerPokemon", () => getPokemon("charmander"));
    if (isLoading) return <div>Cargando pokemon...</div>

    return pokemon ? (
        <div className="vistaPokemon">
            <h4>Pokemon: {pokemon.name}</h4>
            <h5>#{pokemon.id}</h5>
            <img src={pokemon.sprites.other.home.front_default} />
        </div>
    ): null;
}

VistaPokemon.propTypes = {
    item:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default VistaPokemon;
