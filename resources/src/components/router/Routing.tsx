import React, { VFC } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import { About } from "@/components/pages/About";
import { PasswordForgot } from "@/components/pages/PasswordForgot";
import { Policy } from "@/components/pages/Policy";
import { Signin } from "@/components/pages/Signin";
import { Signup } from "@/components/pages/Signup";
import { Terms } from "@/components/pages/Terms";
import { ScrollToTop } from "@/components/utils/ScrollToTop";

export const Routing: VFC = () => {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Redirect exact from="/" to="/about" />
                <Route path="/about" component={About} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/terms" component={Terms} />
                <Route path="/policy" component={Policy} />
                <Route path="/password/forgot" component={PasswordForgot} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<Routing />, document.getElementById("app"));
