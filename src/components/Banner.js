import React from 'react'
import './Banner.css'
import requests from '../request'
import instance from '../instance'
import { useEffect, useState } from 'react'

function Banner() {

 const base_url = "https://image.tmdb.org/t/p/original/";

 const [movie,setMovie] = useState([])

const fetchData = async()=>{
 const response =await instance.get(requests.fetchNetflixOriginals)
 setMovie(response.data.results[
  Math.floor(Math.random()*response.data.results.length)
 ]);
}

useEffect(() => {

fetchData()

}, [])
console.log(movie);
  return (
    <div className='banner' style={{backgroundSize:'cover' , backgroundImage:`url(${base_url}${movie.backdrop_path})`}}>
   <div className='banner_content'>
  <h1 className='banner_title'>{movie.name}</h1>

  <h2 className='banner_overview'>{movie.overview}</h2>
   </div>
  
     </div>
  )
}

export default Banner