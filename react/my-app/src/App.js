import './App.css';

import { useState,useEffect } from 'react';
import { BrowserRouter as Router,Route,Link, Routes  } from 'react-router-dom'
import Contact from './components/Contact'
import { Hello } from './components/Hello';
function App() {
  const [counter,setCounter] = useState(0);


  const increment=()=>{
    setCounter(counter+1)
    
  }
  console.log(counter)
  useEffect(()=>{
    document.title=`clicked ${counter} times`
  },[counter ])
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to='/' className='text'>Home</Link>
        <Link to='/contact' className='text'>Contact</Link>
        <Link to='/about' className='text'>About</Link>
      </nav>

      <button onClick={increment}>Click me</button>
      <h1>{counter}</h1>
      <Routes path='/contact' Component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
