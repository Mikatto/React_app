
import { useRef } from "react";
import useOutsideClose from "./useOutsideClose";
import Form from './Form';

function Modal(props) {

    const modal=useRef();
    useOutsideClose(()=>props.Show(false),modal)

    return(
        <div className="transparentbg" >
            <div className='modal' ref={modal}>
                <p>SignUp</p>
                <Form/>
            </div>
        </div>
    )
}

export default Modal