import { useState } from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import axios from 'axios';


function App() {

const users= [
  {
    "name": "Pooja Sharma",
    "city": "Pokhara",
    "age": 20,
    "profession": "Frontend Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "name": "Aarav Sharma",
    "city": "Kathmandu",
    "age": 22,
    "profession": "Backend Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "name": "Sita Koirala",
    "city": "Biratnagar",
    "age": 19,
    "profession": "UI/UX Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "name": "Rohan Thapa",
    "city": "Butwal",
    "age": 24,
    "profession": "Mobile App Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "name": "Nisha Adhikari",
    "city": "Chitwan",
    "age": 21,
    "profession": "Computer Science Student",
    "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
  }
]

// users.forEach(function(elem){
//   console.log("Hello!")
//   console.log(elem) 
// })


  // const [count, setCount] = useState(0)

  //  const [username, setusername] = useState('')
  //  const [name, setname]=useState([]);
   
  // const submitted=(e)=>{  
  //   e.preventDefault()
  //   // console.log(username)
  //   setusername('')
  // }
  // const addname=()=>{
  //   if (username.trim()==='')return;
  //   setname([name,username]);
  //   setCount(count+1);
  // };
   
  const [data, setdata] = useState([])

  const getData= async()=>{
    const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=20')
     setdata(response.data); 
    console.log("Hello")
    console.log(response)
   
    console.log(data[0].download_url)

  }


  const [photo, setPhoto] = useState(null);


  return (
    <>
     <Navbar setPhoto={setPhoto}/> 
     {photo && <img src={photo.download_url} alt=''/>}
     {/* <div className='p-5'>
      {users.map(function(elem){
        return  <Cards {...elem} />
      })}
     </div> */}

    <div>

      {/* {photo && <img src={photo.download_url}/>} */}
      <Cards name=' samsha' age='20'/>
      <Cards name='Sa' age='20'/>
    </div> 



    <button onClick={getData} className='mx-3 p-3 border bg-blue-500 rounded-2xl 
    cursor-pointer active:scale-90'>Get data</button>

     {data.map(function(elem,idx){
      return <div key={idx} className='bg-gray-50 flex justify-center items-center w-full  p-7 rounded mb-3'>
        <img className='h-50 w-50' src={elem.download_url} alt="" />
      </div>

     })}
     
{/* 
    <Footer/>
    

    <form className='' onSubmit={(e)=>
      submitted(e)}>
      <input className='bg-yellow-50 text-black m-5 border-3 border-blue-300 px-4 py-3' 
      value={username}
      onChange={(e)=>
        setusername(e.target.value)
      }
      type="text" placeholder='Enter your name' />
      
      <button onClick={addname}   type='submit' className='bg-emerald-500 mx-5 px-4 py-2 font-semibold rounded-xl' >submit</button>

      <h2 className='mx-5 px-3 '>{count}</h2>
      <h2 className='mx-5 px-3 '>Names that are registered---</h2>
      <ul className='mx-5 px-3'>
        {name.map((name,index)=>(
          <li key={index}>{name}</li>
        ))
           
        }
       
      </ul> */}
    {/* </form> */}
    </>
  )
}

export default App

