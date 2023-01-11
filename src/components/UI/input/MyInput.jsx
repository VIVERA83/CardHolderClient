import React from 'react';


const MyInput = React.forwardRef((props, ref) => {

    return (
        <input ref={ref}
               className={"form-control form-control-lg"}
               {...props}
        />

    )
})

export default MyInput;