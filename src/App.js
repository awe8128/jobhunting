import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import './App.css';
import AboutMePage from './pages/Aboutme';
import { Route,Routes } from 'react-router-dom';
import Preloader from './components/Preloader';

function App() {
  const [loading, setloading]=useState(false);
  useEffect(()=>{
    setloading(true)
      setTimeout(()=>{
          setloading(false);
      },5000);
  },[]);

  
  return (
    <div className="App"> 

        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/Portfolio' element={<AboutMePage/>}/>
        </Routes>

    </div>
  );
}

export default App;
