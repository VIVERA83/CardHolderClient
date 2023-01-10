import React from "react";
import Greeting from "./Greeting";
class MyHeader extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="overlay"></div>
                <div className="container"></div>
                <div className="description">
                    <Greeting />
                </div>
            </header>
        )
    }
}

export default MyHeader