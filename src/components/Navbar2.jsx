import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Navbar2 = ({setPhoto}) => {

  
  const getPhoto= async()=>{
    const resp= await axios.get("https://picsum.photos/id/237/info")
    setPhoto(resp.data)
    console.log(photo.download_url)
  }
  return (
    
    <>
    <div className='flex items-center justify-center gap-7'>
            <h4 className='text-xl cursor-pointer'>About</h4>
             <h4 onClick={getPhoto} className='text-xl cursor-pointer'>Services</h4>
{/* {photo && <img src={photo.download_url}/>} */}
              <h4 className='text-xl cursor-pointer'>Contact Us</h4>
               <h4 className='text-xl cursor-pointer'>Account</h4>
        </div>

        
    </>
  )
}

export default Navbar2