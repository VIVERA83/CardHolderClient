import React from 'react';
import cl from "./MyModel.module.css"


const MyModel = ({children, visible, setVisible}) => {
    const rootClasses = visible ? [cl.myModel, cl.active] : [cl.myModel]

    return (
        <div className={rootClasses.join(" ")}
             onClick={event => setVisible(false)}
        >
            <div className={cl.myModelContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>

    );
};

export default MyModel;