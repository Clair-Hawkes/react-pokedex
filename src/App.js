import './App.css';
import Pokedex from './Pokedex';
import { pokemonList } from './helpers.js';

function App() {
  return (
    <div className="App">
      <Pokedex allPokemon={pokemonList}/>
    </div>
  );
}

export default App;
