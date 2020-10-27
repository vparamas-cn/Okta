import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";


function Dev() {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/AboutUs" component={About} />
        </Switch>
    )
}

export default Dev;