import PropTypes from "prop-types";

function PokemonCard(props) {
return (
    <figure>
        {props.pokemon.hasOwnProperty('imgSrc') ?
      <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
    : <p>???</p> }
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
)
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string
  })
}

export default PokemonCard;



const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

 