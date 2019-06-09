import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Header from './common/Header.jsx'
import Courses from './courses/courses.jsx';
import ManageCourse from './courses/manageCourse.jsx';
import FunctionalComponent from './courses/functionalComponent.jsx';
import PageNotFound from './PageNotFound.jsx';


function App(){
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/courses" component={Courses}></Route>
                <Route path="/course/:slug" component={ManageCourse}></Route>
                <Route path="/course" component={ManageCourse}></Route>
                <Route path="/functional" component={FunctionalComponent}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    )
}

export default App;