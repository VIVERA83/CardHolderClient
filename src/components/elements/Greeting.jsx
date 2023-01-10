import React from "react";
import {NavLink} from "react-router-dom";


export default class Greeting extends React.Component {
    render() {
        return (
            <h3>▍ Привет, приложение по управлению картами !
                <p>
                    Демо приложение по работе с "некими" картами, реализована
                    возможность: генерации карт, просмотра карты, изменения,
                    удаления, и поиска карты по параметрам
                </p>
                <NavLink to={"/create_cards"}>
                    <button className="btn btn-outline-secondary">Приступить</button>
                </NavLink>
            </h3>
        )
    }
}
