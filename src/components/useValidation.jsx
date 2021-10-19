import { useState } from "react";


const useValidation = values => {
    const [ firstName, setFirstNameError ] = useState();
    const [ lastName, setLastNameError ] = useState();
    const [ email, setEmailError ] = useState();
    const [ password, setPasswordError ] = useState();
    const [ repeatPassword, setRepeatPasswordError ] = useState();
    
    const checkError = e => {
        e.preventDefault();
        for(let value in values){
            
            switch(value){
                case 'firstName':
                    values[value] && values[value].length < 2 ?
                        setFirstNameError('2 Symbols min') :
                        setFirstNameError(null);
                        break;

                case 'lastName': 
                    values[value] && values[value].length < 2 ?
                        setLastNameError('2 Symbols min') :
                        setLastNameError(null);
                    break;

                case 'email': 
                    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    values[value] && !emailReg.test(values[value]) ?
                        setEmailError('Wrong Email') :
                        setEmailError(null)
                    break;

                case 'password': 
                    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,10}$/g
                    values[value] && !passReg.test(values[value]) ?
                        setPasswordError('Password should contains 6-10 characters, mandatory 1 digit, 1 capital letter') :
                        setPasswordError(null)
                    break;

                case 'repeatPassword': 
                    values[value] && values[value] !== values.password ?
                        setRepeatPasswordError('Password mismatch') :
                        setRepeatPasswordError(null)
                    break;

                default: 
                    break;
            }
        }
        
    }

    return {
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
        checkError,
    }
}

export default useValidation;