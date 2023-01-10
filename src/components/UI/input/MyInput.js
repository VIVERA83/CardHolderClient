import React from 'react';
import cl from "./MyInput.module.css"

const MyInput = ({onChange, onBlur, error, ...props}) => {
    return (
        <div className="form-group">
            <input {...props}
                   style={{margin:"1em"}}
                   className={"form-control form-control-lg"}
                   type="number"
                   onChange={onChange}
                   onBlur={onBlur}
            />
            <span className={error ? cl.error : cl.errorHidden}>{error}</span>
        </div>
    )
}

export default MyInput;