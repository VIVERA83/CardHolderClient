import React from 'react';


const MyButton = ({children, ...props}) => {
    return (
        <button {...props}
                className={"btn btn-outline-secondary"}
        >
            {children}
        </button>
    );
};

export default MyButton;