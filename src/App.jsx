import { useState, useEffect, useRef } from 'react';
import ObjectComponent from './Components/object'
import ObjectConnectionString from './Components/thread';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import './App.css'


function App() {
    const [nodes,setNodes] = useState(false);
    const [nodeSelector,setNodeSelector] = useState();
    const [addObj, setAddObj] = useState();

    //functional draw variable here
    const [components, setComponents] = useState(['redis','redis']);
    const [connection, setConnection] = useState([1]);


    const handleNodes = () => {
        setNodes(!nodes)
    }
    const handleNodeSelectionClick = (e) => {
        setNodes(false);
        setNodeSelector('redis');
        console.log('added new component');
        setComponents(prev => [...prev,'redis'])
        setNodeSelector('')
    }

    const ObjectOnScreen = {};
    return (
        <>
            <div className='p-2'>
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
            </div>
            <div className='w-screen h-screen bg-white flex flex-col justify-center align-center border-1 border-dotted'>
                {

                    components.map( c => (
                        <ObjectComponent key={c} title="REDIS" image="https://icon.icepanel.io/Technology/svg/Redis.svg"/>
                    ))


                }
                {

                    connection.map(c =>(
                        <ObjectConnectionString coordinate={{a: {x:100, y: 500}, b: {x: 400, y: 220}}}/>
                    ))
                }
            </div>
        </>
    )
}

export default App
