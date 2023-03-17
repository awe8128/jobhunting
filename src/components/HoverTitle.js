import React, { useState, useEffect } from "react";
import './UI/HoverTitle.scss'
const HoverTitle=()=>{
  const newCharacters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];

  const original = 'ALEX|ANXAA';


  const [newText, setNewText] = useState(original);
  const [count, setCount] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  let intervalId = null;
  const iteration = original.length+1;
  useEffect(() => {
    const handleInterval = () => {
      const characters = newText.split("");
      const changedCharacters = characters.map((character, index) => {
        if(index < count){
            return original[index]
        }
        else{
            return newCharacters[Math.floor(Math.random()*26)] ;
        }
        });
      const updatedText = changedCharacters.join("");
      setNewText(updatedText);
      setCount(count => count + 1/3);
    };
    if (isChanging && count < iteration) {
      intervalId = setInterval(handleInterval, 30);
    }

    return () => clearInterval(intervalId);
  }, [newText, count, newCharacters,isChanging]);

  const handleMouseEnter = () => {
    if (count < iteration) {
        setIsChanging(true);
    }
    setCount(0);
  };
  const handleMouseLeave = () => {
    setIsChanging(true);
    clearInterval(intervalId);
    setCount(0);
    setNewText(original)
   
  };
  return (
    <div>
      <p className='Hover'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{newText}</p>
    </div>
  
  );
}

export default HoverTitle;
