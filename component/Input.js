import React from 'react'
function Input(props){
    let inpuTclasses = props.size ? `input input--${props.size}` : 'input';
    let labelClasses = 'label';

    if(props.error) {
        inpuTclasses = `${inpuTclasses} input--error`;
        labelClasses = "errorLabel"
    }

    return (
        <label className={labelClasses}>{props.name}<br/>
            <input
            className={inpuTclasses}
            type="text"
            placeholder={props.label}
            disabled={props.disabled}
            />
            {props.helperText ? <small>{props.helperText}</small> : ''}
        </label>
        
    )
}

export default Input