import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'



function Movietile({each,isFav}) {

  //console.log(isFav)

const {setFavMovie,favMovie,saveLocally} = useContext(MovieContext)

  const handleClick = () =>{

    //console.log('before'+favMovie)
    setFavMovie(prevFavMovie => [...prevFavMovie, each]);
    
    saveLocally(favMovie)
    

  }

  const removeFav=()=>{

    //console.log('fav' + isFav)
    const arr = favMovie.filter((item)=>{
      return item.Title!== each.Title

    })
    

    setFavMovie(arr)
    saveLocally(arr)

  }

  return (
    <div className='h-80 mb-4 bg-blue-600 border-8 rounded-3xl'>
      {isFav==='false' && <button onClick={handleClick} className='text-center'>Add to fav</button>}
      
        <div className='h-14 bg-slate-400'>
        <p>{each.Title}
        {each.Year}</p>
        </div>
        <img src={each.Poster} alt='movie'></img>
        {isFav === 'true' && <button onClick={removeFav}>Remove</button>}
        </div>
    

  )
}

export default Movietile