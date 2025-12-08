import { useState, useRef, useEffect } from 'react';


export default function ObjectComponent({title, image}) {
    const [data,setData] = useState();
    const ourComp = useRef();
    const [left, setLeft] = useState('10');
    const [top, setTop] = useState('10');
    const [isDragging, setIsDragging] = useState(false);
    const [xOffset, setXOffset] = useState('0');
    const [yOffset, setYOffset] = useState('0');

    const handleDown = (e)=>{
        setIsDragging(true);
        console.log(e.clientX - ourComp.current.offsetLeft)
        setXOffset(e.clientX - ourComp.current.offsetLeft)
        setYOffset(e.clientY - ourComp.current.offsetTop)
    }
    const handleMovment = (e)=>{
        if (!isDragging) return
        console.log("Moving ..")
        console.log(e.clientX-xOffset);
        setTop(e.clientY-yOffset);
        setLeft(e.clientX-xOffset);
    }
    const handleRightClick = (e) => {
        console.log('Right Click');
    }

    return (
        <button 
            ref={ourComp} 
            onMouseDown={handleDown} 
            onMouseMove={handleMovment} 
            onMouseUp={()=>{setIsDragging(false)}}
            onContextMenu={handleRightClick}
            className={`absolute bg-transparent w-20 h-20 cursor-pointer`} 
            style={{ top: `${top}px`, left: `${left}px` }}title={title}
        >
            <img className="" src={image} draggable={false}></img>
        </button>
    );

}
