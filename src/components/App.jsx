import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Header from './common/Header.jsx'
import PageNotFound from './PageNotFound.jsx'

function App(){
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    )
}

export default App;