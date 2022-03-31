import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Movie from './compenents/Movie';
import { Route, Routes } from 'react-router-dom';
import Favoris from './pages/Favoris';
import FavoriteContext from './FavoriteContext';



const SEARCH_API="https://api.themoviedb.org/3/search/movie?api_key=ae1c21d7ad5a65a54196ef103c882c14&language=en-US&query=";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const API_MOVIES = "https://api.themoviedb.org/3/discover/movie?api_key=ae1c21d7ad5a65a54196ef103c882c14&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

function App() {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect( () => { fetch(API_MOVIES)
    .then( res => res.json())
    .then(data =>{
     
      setMovies(data.results);
    });

  }, []);

  const handleOnSubmit =(e) =>{
    e.preventDefault();
    if(searchTerm){

    
    fetch(SEARCH_API+searchTerm)
      .then( res => res.json())
      .then(data =>{
      
        setMovies(data.results);
      });

      setSearchTerm("");
    }
  };
  const handleOnChange =(e) =>{
    setSearchTerm(e.target.value)
  };




  return (
      <>
        <FavoriteContext.Provider value={{
          favs: [],
          updateFavs: () =>{}
        }}>

          <Routes>
            <Route path='/' element={ <Movie/> } />
            <Route path='/favoris' element={ <Favoris/> } />
          <header>
            <form onSubmit={handleOnSubmit} > 
            <input className='rechercher' type="text" placeholder='Rechercher...' 
            value={searchTerm} onChange={handleOnChange}/>
            <h3>Favoris</h3>


            </form>
            
          </header>
          <div className="movie-container">
          
            {movies.length > 0 && movies.map(movie =>
              <Movie key={movie.id} movieDatas={movie} />
              )
            }
          </div>
          </Routes>
        </FavoriteContext.Provider>
      </>
  );
}

export default App;
