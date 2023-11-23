import React from 'react'
import Movietile from './Movietile'

function Movielist({value,isFav}) {

  console.log(isFav)
  return (
    <div className='grid grid-cols-8 gap-4 mt-20 mx-10'>
        
       {
      
       value.map((each,index)=>(
        
        
        
     <Movietile each={each} isFav={isFav} key={index} />

       ))}
    </div>
  )
}

export default Movielist