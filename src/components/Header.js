import React, {useEffect, useState} from 'react';
import './UI/Header.scss'
import AboutMe from './AboutMe';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Loader';
import CursorFollower from './CursorFollower';
import Home from './Home';
import AboutMePage from '../pages/Aboutme';
import Experience from './Experience';
const Header =()=>{
    useEffect(() => {
        AOS.init();
      }, [])
      const [loading, setloading]=useState(false);
      useEffect(()=>{
        setloading(true)
          setTimeout(()=>{
              setloading(false);
          },7000);
      },[]);
    return(
        <>
    {loading ?(
     <Loader></Loader>
      ):(
        <>
        <div className='container'>
            <CursorFollower></CursorFollower>
        <section className='TypingPage'data-aos="fade-down" data-aos-duration="1500">
            <Home></Home>
        </section>
        <section className='AboutPage' data-aos="fade-down" data-aos-duration="1500">
            <AboutMe></AboutMe>
        </section>

        <section className='AboutPage' data-aos="fade-down" data-aos-duration="1500">
            <Experience></Experience>
        </section>
        <section className='one' data-aos="fade-down" data-aos-duration="1500">
            <Footer></Footer>
        </section>
        </div>
        
        </>
        )}
        </>
        
    );
}

export default Header;