import React from "react";
import {createBrowserRouter} from "react-router-dom";

import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import CreateCardsPage from "../pages/CreateCardsPage";
import TestPage from "../pages/TestPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
        // element: <MainPage/>,
        //     errorElement: <ErrorPage/>
    },
    {
        path: "create_cards",
        element: <CreateCardsPage/>

    },
    {
        path: "test_page",
        element: <TestPage/>

    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])
export default router