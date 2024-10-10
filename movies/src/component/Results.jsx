import React from 'react'
import '../component/result.css'
const Results = ({item}) => {
  return (
    <div className='res-card'>
      <div className='res-poster'>
        {item.Poster?( <img src={item.Poster} alt={item.Title}/>) :
        (<div className='filter-poster'> 


        </div>) }

      </div>
      <div className='info'>
        <div className='heading'>
            <h3 className='title'>{item.Title} </h3>
            {item.Year ?( <h4 className='relase-date' >{item.Year} </h4>):("-")}
        </div>
        <div className='contolrs'>
        <button className='btn'>Add to watchlist</button>
        <button className='btn'>Add to watched</button>
      </div>
      </div>
   
    </div>
  )
}

export default Results
