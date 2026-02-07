import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Cards
 = (props) => {
        console.log(props)


        const [sata, setSata] = useState([])
    const getSata=async()=>{
      const res= await axios.get("https://picsum.photos/v2/list?page=2&limit=3")
      setSata(res.data)
      console.log(sata[0].download_url)
      
    }


  return (
    <div className='bg-white mr-5 text-black inline-block text-center rounded-2xl m-3 p-2'>
        <img className='ml-8 h-30 w-30 rounded-full mb-3' src={props.profilePhoto} alt="" />
    <h1 className='text-2xl font-semibold'>{props.name}</h1>
    <h2> Age : {props.age} </h2>
    <h2>Address : {props.city} </h2> 
    
    <p>{props.profession}</p>
    <button onClick={getSata} className='bg-emerald-700 text-white px-4 py-2  cursor-pointer rounded-xl'>Add Friend</button>
    {sata.map(function(element,index){
      return <div key={index} className='bg-amber-50 flex justify-center items-center  w-full p-7 rounded mb-3 '>
        <img className='h-40 w-50' src={element.download_url} alt="" />
      <h1>{element.author}</h1>
      </div>
    })}
    </div>
  )
}

export default Cards 
