import Pokecard from './Pokecard';
import './Pokedex.css';
import { pokemonList } from './helpers.js';

/** Function Pokedex is a module that creates:
 * Takes an array of pokemon objects as the props object.
 *  [{id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},...]
 * Returns and a sequence of Pokecard components for each pokemon obj in array.
 */

function Pokedex({allPokemon=pokemonList}){
  return (
    <div className="Pokedex">
      {allPokemon.map(mon =>
        <Pokecard
          id={mon.id}
          name={mon.name}
          type={mon.type}
          base_experience={mon.base_experience}
        />)}
    </div>
  )
}

export default Pokedex