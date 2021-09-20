import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
import { NotLoggedInUser } from "@/components/organisms/NotLoggedInUser";
import { About } from "@/components/pages/About";
import { ForgotPassword } from "@/components/pages/ForgotPassword";
import { Home } from "@/components/pages/Home";
import { Login } from "@/components/pages/Login";
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
                    <Route path="/terms" component={Terms} />
                    <Route path="/policy" component={Policy} />
                    <Route path="/password/reset" component={PasswordReset} />

                    {/* 未ログインでアクセス可能 */}
                    <NotLoggedInUser path="/login" component={Login} />
                    <NotLoggedInUser path="/register" component={Register} />
                    <NotLoggedInUser
                        path="/forgot-password"
                        component={ForgotPassword}
                    />

                    {/* ログイン済みでアクセス可能 */}
                    <AuthUser path="/home" component={Home} />
                </Switch>
                <ToastContainer position="top-center" autoClose={3000} />
            </RecoilRoot>
        </Router>
    );
};

ReactDOM.render(<Routing />, document.getElementById("app"));
