import logo from "./logo.svg";
import "./App.css";
import Inputform from "./compoments/Inputform";
import Movielist from "./compoments/Movielist";
import { useEffect, useState } from "react";
import { MovieContext } from "./compoments/MovieContext";

function App() {
  const [movie, setMovie] = useState([]);
  const [searchValue,setSearchValue]=useState('')
  const [favMovie,setFavMovie] = useState([]); 
  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=22f95586`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovie(responseJson.Search);
		}
	}

  useEffect(()=>{
    getMovieRequest(searchValue)
  },[searchValue])




  const saveLocally=(item)=>{
    localStorage.setItem('localobject',JSON.stringify(item))

  }

  useEffect(()=>{
    const localdata = JSON.parse(localStorage.getItem('localobject'))
    if(localdata)
    setFavMovie(localdata)

  },[])



  return (
    
    <MovieContext.Provider value={{favMovie,setFavMovie,saveLocally}}>
    <div className="relative">
      <h1 className="text-center">Movie Search App</h1>
      <Inputform value={searchValue} setValue={setSearchValue}/>
      <div className="container bg-red-300 h-[50%]">
      <Movielist  value={movie} isFav={'false'}/>
      </div>
      <div className="container bg-green-300 h-[50%]">
      <Movielist  value={favMovie} isFav={'true'}/>
      </div>
    </div>
    </MovieContext.Provider>
  );
}

export default App;
