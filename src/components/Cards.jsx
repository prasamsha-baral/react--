import React from 'react'

const Cards
 = (props) => {
        console.log(props)
  return (
    <div className='bg-white mr-5 text-black inline-block text-center rounded-2xl m-3 p-2'>
        <img className='ml-8 h-30 w-30 rounded-full mb-3' src={props.profilePhoto} alt="" />
    <h1 className='text-2xl font-semibold'>{props.name}</h1>
    <h2> Age : {props.age} </h2>
    <h2>Address : {props.city} </h2> 
    
    <p>{props.profession}</p>
    <button className='bg-emerald-700 text-white px-4 py-2  cursor-pointer rounded-xl'>Add Friend</button>
    </div>
  )
}

export default Cards 
