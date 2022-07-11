const basePokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

/** Component Pokecard...
 * Takes an Object of a pokemon:
 * {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62}
 * Returns a single Pokemon, with their name, image, and type.
 * <div> <h1>{name}</h1> <img src = {const${id}}/> <p>{type}</p> <p>{base_experience}</p></div>
 *
 */
function Pokecard({ id, name, type, base_experience }) {
  return (
    <span>
      <h1>{name}</h1>
      <img src={basePokeImg + `${id}.png`} alt={`This is a ${name}`} />
      <p>{type}</p>
      <p>{base_experience}</p>
    </span>
  );
}

export default Pokecard;