import React from "react";
import MyHeader from "../components/elements/MyHeader";
import MyNavBar from "../components/elements/MyNavBar";

class Main extends React.Component {
    render() {
        return (
            <div>
                <MyNavBar/>
                <MyHeader/>
            </div>
        )
    }
}

export default Main