import { useState } from "react";

const useInputData = () => {
    
    const [ values, setValue ] = useState({});

    const inputHandler = e => {
        setValue({
            ...values,[e.target.name]: e.target.value
            
        })
        
    }
    
    return {
        values,
        inputHandler,
    };
}

export default useInputData;