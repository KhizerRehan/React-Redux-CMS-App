import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Header from './common/Header.jsx'

function App(){
    return (
        <div className="container-fluid">
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
        </div>
    )
}

export default App;