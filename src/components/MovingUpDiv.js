import { useState, useEffect } from "react";
import './UI/MovingUpDiv.scss'
import SubAboutMe from './SubAboutMe';
import SubEdu from './SubEdu';
import SubSoft from './SubSoft';
import SubHard from './SubHard';
import SubIntern from './SubIntern';

function MovingDivUp() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollHeight = 600; // Maximum scroll height limit
  const scrollSpeed = 0.1; // Adjust this value to change scroll speed

  useEffect(() => {
    function handleScroll() {
      const newPosition = window.scrollY * scrollSpeed; // Adjust scroll speed
      const adjustedScrollPosition = Math.min(newPosition, maxScrollHeight);
      setScrollPosition(adjustedScrollPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxScrollHeight, scrollSpeed]);

  return (
    <div
      className="moving-div-up"
      draggable="false"
      style={{ bottom: `${scrollPosition}px` }}
    > 
      <div className="spara">
        <SubAboutMe></SubAboutMe>
      </div>
      
      <div className="spara">
      <SubEdu></SubEdu>
      </div>

      <div className="spara">
      <SubSoft></SubSoft>
      </div>

      <div className="spara">
      <SubHard></SubHard>
      </div>
      <div className="spara">
      <SubIntern></SubIntern>
      </div>



      
     
        
    </div>
  );
}

export default MovingDivUp;