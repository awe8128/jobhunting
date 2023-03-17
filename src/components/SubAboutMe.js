import React, { useEffect} from "react";
import './UI/Sub_About.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
const SubAboutMe=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div className="sub_title" 
        data-aos="fade-up" 
        data-aos-duration="2500" >
                        ABOUT ME</div>
        <div className="sub_context" data-aos="fade-up" 
                    data-aos-duration="2500">
        Hi. I'm OIDOV ANKHBAYAR. 
        I'm a Mongolian. I've spent the last five years living in Japan, getting to know the diverse culture here, and trying new things. 
        I'm passionate about self-improvement, therefore I go to the gym frequently to keep in shape. 
        Also, I am constantly ready to learn about new technology and stay current with business trends.
        </div> 
        </>
        
    )
}

export default SubAboutMe