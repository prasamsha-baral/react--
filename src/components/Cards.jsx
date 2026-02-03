import React from 'react'

const Cards
 = (props) => {
        console.log(props)
  return (
    <div className='bg-white text-black inline-block text-center rounded-b-2xl rounded-t-2xl m-3 p-2'>
        <img className='h-30 w-30 rounded-full mb-3' src="" alt="" />
    <h1 className='text-2xl font-semibold'>Username is {props.a}</h1>
    <h2>City , Age</h2>
    <button>Add Friend</button>
    </div>
  )
}

export default Cards
