import { useState, useEffect, useRef } from 'react';
import { ReactTerminal } from 'react-terminal'; 
import ObjectComponent from './Components/object'
import ObjectConnectionString from './Components/thread';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import store from "./Store/store.js";
import './App.css'


function App() {
    const { config, toggle } = store();
    const [nodes,setNodes] = useState(false);
    const [connect, setConnect] = useState(false);
    const [tools,setTools] = useState(false);
    const [side,setSide] = useState(false);
    const [nodeSelector,setNodeSelector] = useState();
    const [addObj, setAddObj] = useState();

    //functional draw variable here
    const [components, setComponents] = useState(['redis','redis']);
    const [connection, setConnection] = useState([]);
    const [points,setPoints] = useState([]);
    const handleNodes = () => {
        setNodes(!nodes)
    }
    const handleTools = () => {
        setTools(!tools)
    }
    const handleNodeSelectionClick = (e) => {
        setNodes(false);
        setNodeSelector('redis');
        console.log('added new component');
        setComponents(prev => [...prev,'redis'])
        setNodeSelector('')
    }
    const handleToolsSelectionClick = (e) => {
        setTools(false);
    }
    const handleConnectToolClick = (e) => {
        setConnect(!connect);
    }
    const handleClick = (e) => {
        if (connect){
            setPoints((prev) => [...prev, e.clientX, e.clientY])
            console.log(points.length)

        }
    }

    useEffect(()=>{
        console.log(config);
        console.log(connect);
        console.log(points);
          if (points.length === 4){
            setConnection((prev)=> [...prev, points]);
            setConnect(false);
        }
    },[config,connect, points])

    return (
        <>
        <div className='flex flex-row w-screen'>
            <div className={`${connect ? "[&_*]:cursor-crosshair" :"" }`}>
                <div className='p-2'>
                    <button
                        className="cursor-pointer border-1 rounded-md p-1.5 hover:bg-sky-700 bg-sky-500 text-white "
                        onClick={handleTools}
                    >
                        <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        Tools
                    </button>
                    <button
                        className="cursor-pointer border-1 rounded-md p-1.5 hover:bg-sky-700 bg-sky-500 text-white "
                        onClick={handleNodes}
                    >
                        <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        Node
                    </button>
                    {
                        nodes && (
                        <div>
                                <button onClick={handleNodeSelectionClick}>redis</button>
                        </div>

                        )
                    }
                    {
                        tools && (
                        <div>
                                <button className='cursor-pointer' onClick={handleConnectToolClick}>connection</button>
                        </div>

                        )
                    }
                </div>
                <div className='w-screen h-screen bg-white flex flex-col justify-center align-center border-1 border-dotted' onClick={handleClick}>
                    {
                        components.map( c => (
                            <ObjectComponent key={c} title="REDIS" image="https://icon.icepanel.io/Technology/svg/Redis.svg" setSide={setSide}/>
                        ))
                    }
                </div>
                {
                connection.map( c => (
                <ObjectConnectionString coordinate={{a: {x:c[0],y:c[1]}, b: {x:c[2],y:c[3]}}}/>)
                )
                }
            </div>
            { config &&
                (<div className='w-500'>
                    <ReactTerminal /> 
                </div>)
            }

        </div>

        </>
    )
}

export default App
