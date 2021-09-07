import "react-toastify/dist/ReactToastify.css";

import React, { VFC } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

import { AuthUser } from "@/components/organisms/AuthUser";
import { About } from "@/components/pages/About";
import { Home } from "@/components/pages/Home";
import { Login } from "@/components/pages/Login";
import { PasswordForgot } from "@/components/pages/PasswordForgot";
import { PasswordReset } from "@/components/pages/PasswordReset";
import { Policy } from "@/components/pages/Policy";
import { Register } from "@/components/pages/Register";
import { Terms } from "@/components/pages/Terms";
import { ScrollToTop } from "@/components/utils/ScrollToTop";

export const Routing: VFC = () => {
    return (
        <Router>
            <RecoilRoot>
                <ScrollToTop />
                <Switch>
                    <Redirect exact from="/" to="/about" />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/terms" component={Terms} />
                    <Route path="/policy" component={Policy} />
                    <Route path="/password/forgot" component={PasswordForgot} />
                    <Route path="/password/reset" component={PasswordReset} />

                    <AuthUser>
                        <Route path="/home" component={Home} />
                    </AuthUser>
                </Switch>
                <ToastContainer position="top-center" autoClose={3000} />
            </RecoilRoot>
        </Router>
    );
};

ReactDOM.render(<Routing />, document.getElementById("app"));
