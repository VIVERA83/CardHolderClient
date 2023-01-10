import React from "react";
import {NavLink} from "react-router-dom"

class MyNavBar extends React.Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top ">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Главное</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-4">
                            <li className="nav-item">
                                <NavLink to={"/create_cards"} className="nav-link ">Генерация карт</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Поиск</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>)
    }
}

export default MyNavBar


