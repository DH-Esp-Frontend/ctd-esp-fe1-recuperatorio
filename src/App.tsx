import ListadoPokemons from "./components/ListadoPokemons";
import VistaPokemon from "./components/VistaPokemon";

import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";
import {QueryClient, QueryClientProvider} from "react-query";

import {Provider} from "react-redux";
import {store} from "./store/store";

export default function App() {

    // Vamos a necesitar crear la store, con el estado inicial y configurar el provider para que toda
    // nuestra aplicacion tenga acceso al estado de Redux
    const client = new QueryClient();

    return (
        <Provider store={store}>
            <QueryClientProvider client={client}>
                <div className="App">
                    <h1>Pokédex</h1>
                    <div id="bandejaDeEntrada">
                        <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                            <BuscarPokemon />
                            <div style={{display: 'flex', flexDirection:'row'}}>
                                <ListadoPokemons/>
                                <VistaPokemon />
                            </div>
                        </div>
                    </div>
                </div>
            </QueryClientProvider>
        </Provider>
    );
}
