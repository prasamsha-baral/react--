import { useState } from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
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

    <Footer/>
    <Footer/>

    <form onSubmit={(e)=>
      submitted(e)}>
      <input className='bg-yellow-50 text-black m-5 border-3 border-blue-300 px-4 py-3' 
      value={username}
      onChange={(e)=>
        setusername(e.target.value)
      }
      type="text" placeholder='Enter your name' />
      
      <button onClick={addname}   type='submit' className='bg-emerald-500 px-4 py-2 font-semibold rounded-xl' >submit</button>

      <h2>{count}</h2>
      <h2>---Names that are registered---</h2>
      <ul>
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
