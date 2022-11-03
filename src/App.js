import React, { useState  , useEffect } from 'react';
// import { Route , Routes } from 'react-router-dom'
// import Forms from './forms';
// import Navbar from './navBar'
// import Home from './page/home';
// import Pricing from './page/pricing';
// import About from './page/About';
// import SignUp from './connexion';


function App() { 
  // const isconnect = true 
  const [starWarsData , setStarWarsData] = useState ({})
  const [count, setCount] = React.useState(1)
  
    
  // 1. GET the data (fetch or axios)
    // 2. Save the data to state 

   
     useEffect ( () => {
      console.log("Effect ran ")
      fetch(`https://swapi.dev/api/people/${count}`)
      .then (res=> res.json())
      .then ( data => setStarWarsData(data)); 
     },[count])
  return (
    <div className="App h-full">
  {/* {
    isconnect? 
    
<SignUp/> :
<div>    
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/pricing" element ={<Pricing/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/form" element ={<Forms/>}/>
    </Routes>
   </div>
   </div>
  }  */}
  <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
  <h2>The count is {count}</h2>
            <button className='bg-blue-500 m-5' onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
    );
  }

export default App;
