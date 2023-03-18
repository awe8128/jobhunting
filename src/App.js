import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import './App.css';
import AboutMePage from './pages/Aboutme';
import { Route,Routes, HashRouter } from 'react-router-dom';
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
          <Route exact path='/jobhunting/'  element={<Header/>}/>
          <Route path='/jobhunting/#/Portfolio'  element={<AboutMePage/>}/>
        </Routes>

    </div>
  );
}

export default App;
