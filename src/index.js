
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App.jsx'; // App Routes
import './index.css';

function HelloWorld() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h4>Hello World for Starters</h4>
                Aute pariatur est qui pariatur Lorem est commodo aliquip officia.
                <br/><br/>
            </div>
        </React.Fragment>
    )
}

//  BASIC HELLO-WORLD COMPONENT AND COMPONENT WITH ROUTING:
render(
    <>
        <HelloWorld/>
        <Router>
            <App/>
        </Router>
    </>
    , document.getElementById('app')
);
