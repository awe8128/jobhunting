import React from "react";
import Typing from './TypingPage';

import me from './img/me.jpg';
import HoveringTitle from './HoverTitle';
import him from './img/him.jpg';
import'./UI/HomeSite.scss';
const HomeSite =()=>{
    return(
        <>
        <div className="card">
            <div className='column'>
                        <div className='brand'>Alex</div>
                        <img className='halfCircle' alt='profile' src={him}></img>
                        <div className='social'>
                            <div className='items'>| Instagram
                                <a class ="Link" href="https://www.instagram.com/anxaa.o/">
                                    
                                </a>
                             </div>
                            <div className='items'>| Facebook </div>
                        </div>
                    </div>
                    <div className='row'>
                    
                    <div className="navbar" data-aos="fade-down" data-aos-duration="1500" >
                                <ul>
                                    <li ><a href="/jobhunting">Home</a></li>
                                    <li ><a href="/jobhunting/#/Portfolio">Portfolio</a></li>
                                </ul>
                            </div>
                    <div className="firsthalf">
                        <div className="rowhead">
                            <HoveringTitle></HoveringTitle>
                        </div>
                        <div className="rowbody">


                    </div>
                    </div>
                    <div className="secondhalf"> 
                    <div className="rowbodycontext">
                            <div className='discover'>
                                <p>Greetings, I'm Oidov Ankhbayar - 
                                    a driven mechanical engineering 
                                    student from Mongolia currently 
                                    pursuing my studies at Chiba University in Japan. 
                                    When I'm not immersed in my studies, 
                                    you can find me indulging in my passion for creating 
                                    stunning websites that captivate and engage their audience. 
                                    As a proud Mongolian, I'm committed to achieving excellence in both my 
                                    academic pursuits and my creative endeavor.
                                </p>
                            </div>
                        </div>
                        <div className="rowfoot">
                            <Typing></Typing>
                        </div>
                    </div>
                        
                        
                        <div className='arrow'></div>
                        <img className='profile_0'alt='profile0'src={me}></img>
                        <div className="pages">
                                <div className='currentPage'>01</div>
                                <div className='maxPage'>04</div>
                            </div>
                        
                        
                            <div className='arrowBall'>
                                <div className='downArrow'>&darr;</div>
                        </div>
          
                            
                    
                    </div>
                    </div>
        </>
    )
}



export default HomeSite;