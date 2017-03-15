import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Pictures from "./pages/Pictures";
import Login from "./pages/Login";
import Package from "./pages/Package";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="Info" component={Info}></Route>
            <Route path="Packages" component={Packages}></Route>
            <Route path="Packages/:package" component={Package}></Route>
            <Route path="Pictures" component={Pictures}></Route>
            <Route path="Login" component={Login}></Route>
        </Route>
    </Router>
, app);
