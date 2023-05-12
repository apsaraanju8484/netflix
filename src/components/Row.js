
import React,{useEffect} from 'react'
import instance from '../instance'
import { useState } from 'react'
import './Row.css'

function Row({isPoster,title,fetchUrl}) {

 const [movies,setMovies] = useState([])
 const base_url = "https://image.tmdb.org/t/p/original/";
 const fetchData= async()=>{
 const response = await instance.get(fetchUrl)
 setMovies(response.data.results);
}


useEffect(() => {
  fetchData()
},[])

console.log(movies);
  return (
    <div className='row'>
     <h2>{title}</h2>
     <div className='movies_row'>
      {
       movies.map((movies)=>(
        <img className={`movie ${isPoster && 'movie_poster'}`} src={`${base_url}${isPoster ? movies.poster_path: movies.backdrop_path}`}/>
       ))
      }
     </div>
    
     </div>
  )
}

export default Row