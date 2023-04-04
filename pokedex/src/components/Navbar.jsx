import PropTypes from "prop-types";

function Navbar({count, setCount, pokemonList}){
  console.log(pokemonList)
    const handleClickRight = () => {
        setCount(count+1)
      }

      const handleClickLeft = () => {
        setCount(count-1)
      }

return (
    <div className='buttons'>
      {
                count === 0 ? "" :
                <button onClick={handleClickLeft}>Précédent</button>
            }

            {
                count === (pokemonList.length-1) ? "" :
                <button onClick={handleClickRight}>Suivant</button>
            }
    </div>
  )

  }

export default Navbar;