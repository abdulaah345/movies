import React from 'react'
import '../component/Add.css'
const Add = () => {
  return (
    <div className='Add-page' > 
      <div className='container'>
        <div className='add-contant'>
             <div className='input-container'>
                <input placeholder='Search for a movie' type='text'></input>
             </div>
             <ul className='results'>

             </ul>
        </div>

      </div>
    </div>
  )
}
 
 export default Add
