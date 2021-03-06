
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App.jsx'; // App Routes
import './index.css';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/configureStore.js';

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

const store = configureStore();
//  BASIC HELLO-WORLD COMPONENT AND COMPONENT WITH ROUTING:
render(
    <ReduxProvider store={store}>
        <React.Fragment>
            <HelloWorld/>
            <Router>
                <App/>
            </Router>
        </React.Fragment>
    </ReduxProvider>
    , document.getElementById('app')
);
