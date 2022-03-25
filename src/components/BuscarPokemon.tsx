import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {buscarPokemon} from "../actions/pokemonActions";

const BuscarPokemon = () => {
    const [text, setText] = useState<string>("");
    // No olvidemos agregar el hook de redux para obtener el acceso al objeto dispatch
    const dispatch = useDispatch();

    const onBuscarClick = () => {
        // Aqui debemos despachar una acción utilizando el dispatch proveniente del hook de redux
        dispatch(buscarPokemon(text));
    }

    return (
        <div id="buscarPokemon">
            <label>Buscar pokemon</label>
            <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => onBuscarClick()}>Buscar</button>
        </div>
    );
}

export default BuscarPokemon;
