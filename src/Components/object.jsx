import { useState, useRef, useEffect } from 'react';


export default function ObjectComponent({title}) {
    const [data,setData] = useState();
    const ourComp = useRef();
    const [left,setLeft] = useState('10');
    const [top,setTop] = useState('10');
    const [isDragging, setIsDragging] = useState(false);
    const [xOffset,setXOffset] = useState('0');
    const [yOffset,setYOffset] = useState('0');

    const handleDown = (e)=>{
        setIsDragging(true);
        console.log(ourComp.current);
        console.log(e.clientX - ourComp.current.offsetLeft)
        setXOffset(e.clientX - ourComp.current.offsetLeft)
        setYOffset(e.clientY - ourComp.current.offsetTop)
    }
    const handleMovment = (e)=>{
        console.log(isDragging);
        if (!isDragging) return
        setTop(e.clientY-yOffset);
        setLeft(e.clientX-xOffset);
    }

    return (
        <button 
            ref={ourComp} 
            onMouseDown={handleDown} 
            onMouseMove={handleMovment} 
            onMouseUp={()=>{setIsDragging(false)}}
            className={`absolute bg-transparent w-20 h-20 cursor-pointer`} 
            style={{ top: `${top}px`, left: `${left}px` }}title={title}
        >
            <img className="" src="https://icon.icepanel.io/Technology/svg/Redis.svg" draggable={false}></img>
        </button>
    );

}
