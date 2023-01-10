import React from "react";


const MySelect = () => {
    return (
        <div className="form-group"
             style={{margin: "1em"}}>
            <select className="form-control form-control-lg">
                <option value="year">year</option>
                <option value="six_months">six_months</option>
                <option value="month">month</option>
            </select>
        </div>
    );
};

export default MySelect;
