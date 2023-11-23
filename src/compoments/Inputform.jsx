import React from 'react'

function Inputform({value,setValue}) {


  return (
    <div className='bg-slate-400 '>
        <form action="" className='absolute top-5 right-14'>
            <input type="text" name="" id="" placeholder='enter the movie name' className='border-2' 
            value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className='ml-5'>click</button>
        </form>

    </div>
  )
}

export default Inputform