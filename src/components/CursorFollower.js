import { useState, useEffect } from 'react';
import './UI/CustomCursor.scss'

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({ x: event.clientX, y: event.clientY + window.pageYOffset});
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  

  return (
    <>
    <div id='blob' style={{ top: position.y, left: position.x }}></div>
    <div id='blur'></div>
    </>
  );
}

export default CursorFollower