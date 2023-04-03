import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"


function App() {
  const [count, setCount] = useState(0);
  const pokemon = pokemonList[count];
  const handleClickRight = () => {
    setCount(count+1)
  }
  const handleClickLeft = () => {
    setCount(count-1)
  }
  return (
      <div className='pokedex'>
        <PokemonCard pokemon={pokemonList[count]}/>
      <div className='button'>
      <button onClick={handleClickLeft}>Précédent</button>
      <button onClick={handleClickRight}>Suivant</button>
      </div>
      </div>
 
  )
}

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
export default App;
