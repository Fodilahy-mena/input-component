import React from 'react'
import IconCall from '../assets/call.svg'
function Input(props){
    let inpuTclasses = props.size ? `input input--${props.size}` : 'input';
    let labelClasses = 'label';

    if(props.error) {
        inpuTclasses = `${inpuTclasses} input--error`;
        labelClasses = "errorLabel"
    }

    if(props.helperText && props.error) {
        inpuTclasses = `${inpuTclasses} input--helperTextError`;
        labelClasses = "helperTxtErrorLabel"
    }

    if(props.startIcon) {
        inpuTclasses = `${inpuTclasses} input--startIcon`
    }

    if(props.endIcon) {
        inpuTclasses = `${inpuTclasses} input--endIcon`
    }

    if(props.fullWidth) {
        inpuTclasses = `${inpuTclasses} input--fullWidth`
    }

    let input; 

    if(!props.rows) {
        input = <input
        className={inpuTclasses}
        type="text"
        placeholder={`${props.label}`}
        disabled={props.disabled}
        defaultValue={props.value === "Text" ? props.value : ''}
        /> 
    } else {
        input = <textarea className={inpuTclasses} rows = "4" cols = "30" placeholder={props.label}/>
    }

    if(props.rows) {
        inpuTclasses = `${inpuTclasses} textareas`
    }
    
    return (
        <label className={labelClasses}>{props.name}<br/>
            {input}  
            {props.helperText ? <small>{props.helperText}</small> : ''}
        </label>
        
    )
}

export default Input