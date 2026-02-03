import { useState } from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './components/Cards';


function App() {

const users= [
  {
    "name": "Prasamsha Baral",
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

users.forEach(function(elem){
  console.log("Hello!")
  console.log(elem) 
})




  const [count, setCount] = useState(0)

   const [username, setusername] = useState('')
   const [name, setname]=useState([]);
   
  const submitted=(e)=>{
    e.preventDefault()
    console.log(username)
    setusername('')
  }
  const addname=()=>{
    if (username.trim()==='')return;
    setname([name,username]);
    setCount(count+1);
  };
   
  return (
    <>
     <Navbar/> 

    <div>
      <Cards a='prasamsha'/>
      <Cards a='prasamsha'/>
    </div>
     
     

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
       
      </ul>
    </form>
    </>
  )
}

export default App

