import React from 'react';
// import classes from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {
    console.log(props)
    return (
        <button {...props}
                className={"btn btn-outline-secondary"}
                style={{margin: "1em"}}>

            {children}
        </button>
    );
};

export default MyButton;