import './UI/Flow.scss'
import React from "react";
import MovingDiv from "../components/MovingDiv";
import MovingDivUp from './MovingUpDiv';
import SubAboutMe from './SubAboutMe';
import SubEdu from './SubEdu';
import SubSoft from './SubSoft';
import SubHard from './SubHard';
import SubIntern from './SubIntern';
import CursorFollower from './CursorFollower';
const Flow=()=>{
    return(
        <> 
      
      
        <div className='columnFlow'>
        <CursorFollower></CursorFollower>
            <div className='flow1'>
                <div className='tracker'>
                    <MovingDiv></MovingDiv>
                    <MovingDivUp></MovingDivUp>
                </div>
            </div>
            <div className='flow2'>
                <div className='col_space'>
                    
                </div>
                <div className='col_cont'>
                    <div className='para'>
                        <SubAboutMe></SubAboutMe>
                    </div>
                    <div className='para'>
                        <SubEdu></SubEdu>
                    </div>
                    <div className='para'>
                        <SubSoft></SubSoft>
                    </div>
                    
                    <div className='para'>
                        <SubHard></SubHard>
                    </div>
                    <div className='para'>
                        <SubIntern></SubIntern>
                    </div>
                    
                </div>
            </div>
            
   

        </div>
           
        
        </>
    )
   
}


export default Flow;