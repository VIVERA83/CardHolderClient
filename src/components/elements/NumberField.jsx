import React from "react";

const NumberField = ({name, onChange, onBlur, placeholder, error}) => (
    <div className="form-group">
        <input type="number"
               className="form-control form-control-lg"
               name={name}
               onChange={onChange}
               onBlur={onBlur}
               placeholder={placeholder}/>
        <span className={error ? "error" : "error-hidden"}>{error}</span>
    </div>
)


export default NumberField