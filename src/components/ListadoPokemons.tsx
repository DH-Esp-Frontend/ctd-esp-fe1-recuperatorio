import React, {useEffect} from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import {buscarPokemons} from "../queries/pokemon.queries";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";
import {useQuery} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import {seleccionarPokemon, SeleccionarPokemonType} from "../actions/pokemonActions";
import {IRootState} from "../store/store";

/**
 * Visualiza una lista de pokemons
 *
 * Ej:
 * <pre>
 *     <ListadoPokemons />
 *
 * </pre>
 *
 * @author Digital House
 */
const ListadoPokemons = () => {
    const busqueda = useSelector<IRootState, string>(state => state.pokemon.busqueda)
    const dispatch = useDispatch();

    // // Utilizamos useQuery para buscar los pokemons con el input que viene de redux
    const {data: pokemons, isLoading, refetch} = useQuery("obtenerPokemons", () => buscarPokemons(busqueda));
    useEffect(() => {
        if (busqueda) {
            refetch();
        }
    },[busqueda])

    const onSeleccionarPokemon = (pokemon: Pokemon) => {
        dispatch(seleccionarPokemon(pokemon));
    }

    if (isLoading) return <div>Cargando pokemons...</div>
    return (
        <div id="listadoCategorias">
            {pokemons && pokemons.map((pokemon: Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                                     seleccionarPokemon={onSeleccionarPokemon}
                                     key={extractPokemonId(pokemon.url)}/>
            ))}
        </div>
    );
}

export default ListadoPokemons;
