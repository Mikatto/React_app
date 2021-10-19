import useInputData from './useInputData';
import useValidation from './useValidation';
import { useState } from 'react';

const formFields = [{name:'firstName', placeholder:'First Name', type:'text'},
                    {name:'lastName',placeholder:'Last Name',type:'text'},
                    {name:'email',placeholder:'Email',type:'text'},
                    {name:'password',placeholder:'Password',type:'password'},
                    {name:'repeatPassword',placeholder:'Repeat Password',type:'password'}]

function Form(props) {
    const { values, inputHandler } = useInputData();
    const errors = useValidation(values);
    
    const [showPassword, setShowPassword] = useState('password');
    const [showHide, setShowHide] = useState('Show');

    const handlePasswordState = () => {
        setShowPassword(prevState => prevState === 'password' ? 'text' : 'password')
        setShowHide(prevState => prevState === 'Hide' ? 'Show' : 'Hide')
    }

    return (
        <form className='modal_field' onSubmit={errors.checkError}>

            {formFields.map((field, key) =>{
                return(
                <div className="input_wrapper" key={key}> 

                    <input className='input' type={field.type==='password'? showPassword:null} placeholder={field.placeholder} name={field.name} onChange={inputHandler}
                            style={errors[field.name] ? {border: '1px solid rgb(255, 0, 64)'} : null}/>
                    {field.type==='password'? <button className="show_button" onClick={handlePasswordState}>{showHide}</button>:null}
                    {errors[field.name] ? <div className="error_message">{errors[field.name]}</div> : null}
                </div>
                )
            })}
            <button className='button' type='submit'>Continue</button>
        </form>
    )
}

export default Form