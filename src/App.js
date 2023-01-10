import React from 'react';
import Main from "./routes/main"
import {createBrowserRouter} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import CreateCards from "./routes/createCards";

import "../src/css/App.css"
import "../src/css/MyNavBar.css"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "contacts/:contactId",
        element: <Contact/>
    },
    {
        path: "root",
        element: <Root/>
    },
    {
        path: "create_cards",
        element: <CreateCards/>
    },
])

