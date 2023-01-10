import React from "react";
import {createBrowserRouter} from "react-router-dom";

import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import CreateCardsPage from "../pages/CreateCardsPage";
import TestPage from "../pages/TestPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TestPage/>
        // element: <MainPage/>,
        //     errorElement: <ErrorPage/>
    },
    {
        path: "create_cards",
        element: <CreateCardsPage/>

    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])
export default router