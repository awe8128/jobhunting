import React from "react";
import './UI/Preloader.scss';
import CountUp from 'react-countup';
const Preloader =()=>{

    return(
        <div className='load'>

        <div className="circle"> <CountUp className="count" suffix="% " end={100} duration={5} ></CountUp> </div>
      
       </div>
    )
}


export default Preloader;