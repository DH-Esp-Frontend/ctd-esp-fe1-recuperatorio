import ListadoPokemons from "./components/ListadoPokemons";
import VistaPokemon from "./components/VistaPokemon";

import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";

import {Provider} from "react-redux";
import {store} from "./store/store";
import HistorialPokemon from "./components/HistorialPokemon";

export default function App() {
    return (
        <Provider store={store}>
                <div className="App">
                    <h1>Pokédex</h1>
                    <div id="bandejaDeEntrada">
                        <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                            <BuscarPokemon />
                            <div style={{display: 'flex', flexDirection:'row'}}>
                                <ListadoPokemons/>
                                <VistaPokemon />
                                <HistorialPokemon />
                            </div>
                        </div>
                    </div>
                </div>
        </Provider>
    );
}
