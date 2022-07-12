import './Pokecard.css';
const BASE_IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

/** Component Pokecard...
 *  Takes an Object of a pokemon:
 *    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62} =>
 *
 *  Returns a single Pokemon, with their name, image, type, exp.
 */
function Pokecard({ id, name, type, base_experience }) {
  return (
    <span className="Pokecard">
      <h2>{name}</h2>
      <img src={`${BASE_IMG_URL}${id}.png`} alt={`${name}`}/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </span>
  );
}

export default Pokecard;