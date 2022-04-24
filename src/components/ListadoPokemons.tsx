import React, {useEffect, useState} from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import {buscarPokemons} from "../queries/pokemon.queries";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";
import {useAppDispatch, useAppSelector} from "../store/store";
import {seleccionarPokemon, selectBusqueda} from "../reducers/pokemonReducer";

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
    const busqueda = useAppSelector(selectBusqueda)
    const dispatch = useAppDispatch();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        if (busqueda) {
            setLoading(true);
            buscarPokemons(busqueda).then((data) => {
                setPokemons(data);
                setLoading(false);
            })
        }
    }, [busqueda])

    const onSeleccionarPokemon = (pokemon: Pokemon) => {
        dispatch(seleccionarPokemon(pokemon));
    }

    if (isLoading) return <div>Cargando pokemons...</div>
    return (
        <div className="listado">
            {pokemons && pokemons.map((pokemon: Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                                     seleccionarPokemon={onSeleccionarPokemon}
                                     key={extractPokemonId(pokemon.url)}/>
            ))}
        </div>
    );
}

export default ListadoPokemons;
