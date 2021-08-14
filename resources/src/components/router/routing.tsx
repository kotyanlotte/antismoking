import React, { VFC } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import { About } from "@/components/pages/about";
import { Signin } from "@/components/pages/signin";
import { Signup } from "@/components/pages/signup";

export const Routing: VFC = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/about" />
                <Route path="/about" component={About} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<Routing />, document.getElementById("app"));
