import Pokecard from './Pokecard';
import './Pokedex.css';
import './App.css';

/** Function Pokedex is a module that creates:
 * Takes an array of pokemon objects.
 * Returns and a sequence of Pokecard components for each pokemon obj in array.
 */

function Pokedex({allPokemon}){
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