import 'bootstrap/dist/css/bootstrap.css';
import "../src/css/index.css"
import React from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider,} from "react-router-dom";
import {router} from './App';


const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

