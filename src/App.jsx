import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';
import useEscape from './components/useEscape';

function App(props) {
    const [isOpen, setIsOpen] = useState(false);

    const ShowModal = () => {
        setIsOpen(true)
    }
    
    useEscape(() => setIsOpen(false))

    return (
        <div className='main_wrapper'>
            <button className='button' onClick={ShowModal}>SignUp</button>
            {isOpen===true? <Modal Show={setIsOpen}/>:false}
        </div>
    )
}

export default App;
