import React, { useEffect, useState } from 'react'
import '../component/Add.css'
import axios from "axios"
import Results from './Results';
const Add = () => {

  const[searchvalue,setSearchvalue]=useState("");
  const[movies,setMovies]=useState([]);

  useEffect(()=>{

    axios.get(`https://www.omdbapi.com/?s=${searchvalue}&apikey=148f7e34`).then((res)=>{
      if(res.data.Search){
        setMovies(res.data.Search)
      }
     
    }).catch((error)=>console.log(error))
  },[searchvalue])
  return (
    <div className='Add-page' > 
      <div className='container'>
        <div className='add-contant'>
             <div className='input-container'>
                <input placeholder='Search for a movie' type='text' value={searchvalue} onChange={(e)=>setSearchvalue(e.target.value)}></input>
             </div>
           {movies.length>0  &&<ul className='results'>
            
            {movies.map((item)=>(<li key={item.imdbID}>{<Results item={item} />}</li>))}
            </ul>}
        </div>

      </div>
    </div>
  )
}
 
 export default Add
