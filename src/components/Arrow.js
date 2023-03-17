import React from "react";


const Arrow=(props)=>{
    return(
        <>
        <div className='arrow'></div>
        <div className="pages">
            <div className='currentPage'>0{props.number}</div>
            <div className='maxPage'>04</div>
        </div>
 
        </>
    )
}


export default Arrow;