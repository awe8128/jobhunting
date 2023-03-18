import React from "react";
import him from './img/him.jpg';
import'./UI/Experience.scss';
import Arrow from "./Arrow";
const Experience=()=>{
    return(
        <>
        <div className="card">
            <div className='column'>
                <div className='brand'>Alex</div>
                <img className='halfCircle' alt='profile' src={him}></img>
                <div className='social'>
                        <div className='items'>| Facebook </div>
                        <div className='items'>| Instagram </div>
                </div>
            </div>

            <div className='row'>
                <div className="navbar" data-aos="fade-down" data-aos-duration="1500" >
                    <ul>
                        <li ><a href="/jobhunting">Home</a></li>
                        <li ><a href="/jobhunting/Portfolio">Portfolio</a></li>
                    </ul>
                </div>
                <div className="exphalf">
                    <div className="exp1">
                        <div className="topic">Intern</div>
                    </div>
                    <div className="exp2">
                    <div className="smallcard">
                        <div className="subtopic">Mynavi</div>
                        <div className="explain">
                            Website design for Timeline targeting new graduate,
                            Led a multi-disciplinary 4 person team to design & develop,
                            1st place, Technical awards, positive feedback, received early employment selection
                        </div>
                    </div>
                    <div className="smallcard">
                    <div className="subtopic">NTT data</div>
                    <div className="explain">
                                Website design for bank application & Group project,
                                Built the billing system for Educational institution's tuition between parents,
                                Completed task successfully with positive feedback and received early employment selection
                    </div>
                    </div>
                    </div>
                    <div className="exp3">
                    <div className="smallcard">
                    <div className="subtopic">Soft Skill</div>
                    <div className="explain">
                        Friendliness and Manners<br></br>
                        Self-motivated<br></br>
                        Leadership<br></br>
                        Strong Communication<br></br>
                        Flexibility    
                    </div>
                    </div>
                    <div className="smallcard">
                    <div className="subtopic">Hard Skill</div>
                    <div className="explain">
                        HTML & CSS<br></br> 
                        Javascript <br></br>
                        React<br></br>
                        Python<br></br>
                        Web Design UI & UX<br></br> 
                        Mechanical Engineering
                    </div>
                    </div>
                    </div>
                    <Arrow number={3}></Arrow>
                    <div className='arrowBall'>
                        <div className='downArrow'>&darr;</div>
                    </div>
                </div>
         
          
                            
                    
                </div>
            </div>
        </>
    )
}

export default Experience