import { useContext } from "react"
import Movie from "../compenents/Movie";
import FavoriteContext from "../FavoriteContext";


const Favoris = () =>{
    let {favs} = useContext(FavoriteContext);


    return (
        <div>
            <h1>Mes films favoris</h1>
            <grid>
                {
                    favs.map(item => <Movie key={item.id} movieDatas={item}/>)
                }
            </grid>
        </div>
    )
}
export default Favoris;