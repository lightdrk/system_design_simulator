import { useState, useRef, useEffect } from 'react';


export default function ObjectConnectionString({coordinate}) {
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);
    const [y1, setY1] = useState(0);
    const [y2, setY2] = useState(0);
    
    useEffect(()=>{
        setX1(coordinate.a.x);
        setX2(coordinate.b.x);
        setY1(coordinate.a.y);
        setY2(coordinate.b.y);
    },[x1,x2,y1,y2]);

    return (
        <svg className="absolute inset-0 pointer-events-none">
            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="black"
                strokeWidth="6"
            />
        </svg>
    );

}
