import React from "react";
import MyNavBar from "../components/elements/MyNavBar";

const NotFoundPage = () => {
    return (
        <div>
            <MyNavBar/>
            <div style={{display: "flex", justifyContent: "center", marginTop: 150}}>
                <h1>Страница не найдена</h1>
            </div>
        </div>
    )
}

export default NotFoundPage