import React from "react";
import CreateCardForm from "../components/Forms/CreateCardForm";
import MyNavBar from "../components/elements/MyNavBar";

const CreateCardsPage = () => {
    return (
        <div>
            <MyNavBar/>
            <header className="header">
                <div className="overlay"></div>
                <div className="container"></div>
                <div className="description">
                    <CreateCardForm/>
                </div>
            </header>

        </div>)

}
export default CreateCardsPage

