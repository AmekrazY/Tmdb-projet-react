import React, { useContext, useEffect, useState } from "react";
import FavoriteContext from "../FavoriteContext";



const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass =(vote) =>{
    if(vote >= 8){
        return "green";
    }else if ( vote >= 6){
        return "orange";
    }else{
        return "red";
    }
};


const Movie = (props) => {

    let {title, poster_path, id,vote_average,overview} = props.movieDatas
    let favContext = useContext(FavoriteContext);
    let [isFav, setFav] = useState('');
    
    useEffect(
        () => {
            let find = false;
            for (let movieFav of favContext.favs) {
                if (movieFav.id != id) {
                    continue; // passe au tour de boucle suivant sans executer la suite
                }
                find = true;
                setFav(' active')
                break; // met fin a la boucle
            }
            if (!find) {
                setFav('')
            }
        }, [favContext]
    )
    return(
    <div className="movie">
        
        <img src={IMG_API + poster_path} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            <span onClick={() => { favContext.register={ }}`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            <span onClick={() => { favContext.register=(props.movieDatas)} className={"favorite"+isFav}`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
           
            
        </div>
        <div className="movie-over">
            <h2>Détails :</h2> 
            <p>{overview}</p>   
        </div>
        
    </div>
    )
    

}

export default Movie;