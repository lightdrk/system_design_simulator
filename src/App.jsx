import ObjectComponent from './Components/object'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import './App.css'

function App() {
    const ObjectOnScreen = {};
    return (
        <>
            <div className='p-2'>
                <button
                    className="cursor-pointer border-1 rounded-md p-1.5 hover:bg-sky-700 bg-sky-500 text-white "
                >
                    <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                    Node
                </button>
            </div>
            <div className='w-screen h-screen bg-white flex flex-col justify-center align-center border-1 border-dotted'>
                <ObjectComponent title="REDIS" image="https://icon.icepanel.io/Technology/svg/Redis.svg"/>
                <ObjectComponent title="REDIS" image="https://icon.icepanel.io/Technology/svg/Redis.svg"/>
            </div>
        </>
    )
}

export default App
