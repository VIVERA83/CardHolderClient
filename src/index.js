import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.css"
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';


const root = createRoot(document.getElementById('root'))

root.render(
    <App/>
);

