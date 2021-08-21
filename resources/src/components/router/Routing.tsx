import React, { VFC } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import { About } from "@/components/pages/About";
import { Privacy } from "@/components/pages/Privacy";
import { Signin } from "@/components/pages/Signin";
import { Signup } from "@/components/pages/signup";
import { Terms } from "@/components/pages/Terms";

export const Routing: VFC = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/about" />
                <Route path="/about" component={About} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/terms" component={Terms} />
                <Route path="/privacy" component={Privacy} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<Routing />, document.getElementById("app"));
