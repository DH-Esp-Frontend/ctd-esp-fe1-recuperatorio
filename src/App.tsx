import ListadoPokemons from "./components/ListadoPokemons";
import VistaPokemon from "./components/VistaPokemon";

import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";
import {QueryClient, QueryClientProvider} from "react-query";

export default function App() {

    // Vamos a necesitar crear la store, con el estado inicial y configurar el provider para que toda
    // nuestra aplicacion tenga acceso al estado de Redux
    const client = new QueryClient();

    return (
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
    );
}
