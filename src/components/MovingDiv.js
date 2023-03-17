import { useState, useEffect } from "react";
import  './UI/MovingDiv.scss'
function MovingDiv() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollHeight = 380; // Maximum scroll height limit
  const scrollSpeed = 0.15; // Adjust this value to change scroll speed

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
      className="moving-div"
      draggable="false"
      style={{ top: `${scrollPosition*0.9}px` }}
    >
    </div>
  );
}

export default MovingDiv;
