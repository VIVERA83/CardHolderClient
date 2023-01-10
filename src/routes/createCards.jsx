import React from "react";
import MyNavBar from "../components/elements/MyNavBar";
import CreateCardForm from "../components/Forms/CreateCardForm";


class CreateCardsPage extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="overlay"></div>
                    <div className="container"></div>
                    <div className="description">
                        <CreateCardForm/>
                    </div>
                </header>

            </div>)
    }
}

export default class CreateCards extends React.Component {
    render() {
        return (<div>
            <MyNavBar/>
            <CreateCardsPage/>
        </div>)
    }
}
