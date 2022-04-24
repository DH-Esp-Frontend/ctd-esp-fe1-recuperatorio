import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {buscarPokemon} from "../actions/pokemonActions";

const BuscarPokemon = () => {
    const [text, setText] = useState<string>("");
    const dispatch = useDispatch();

    const onBuscarClick = () => {
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
