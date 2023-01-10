import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";

import "./styles/App.css"
import "./styles/MyNavBar.css"

function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App

