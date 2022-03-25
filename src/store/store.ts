import {combineReducers} from "@reduxjs/toolkit";
import pokemonReducer from "../reducers/pokemonReducer";
import {createStore} from "redux";

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer
)