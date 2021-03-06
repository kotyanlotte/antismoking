/* eslint-disable simple-import-sort/imports */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable simple-import-sort/imports */

import React, { lazy, Suspense, VFC } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

import { Loading } from "@/components/molecules/Loading";
import { ScrollToTop } from "@/components/utils/ScrollToTop";

const AuthUser = lazy(() =>
    import("@/components/organisms/AuthUser").then(({ AuthUser }) => ({
        default: AuthUser,
    }))
);
const NotLoggedInUser = lazy(() =>
    import("@/components/organisms/NotLoggedInUser").then(
        ({ NotLoggedInUser }) => ({ default: NotLoggedInUser })
    )
);
const About = lazy(() =>
    import("@/components/pages/About").then(({ About }) => ({ default: About }))
);
const Edit = lazy(() =>
    import("@/components/pages/Edit").then(({ Edit }) => ({ default: Edit }))
);
const ForgotPassword = lazy(() =>
    import("@/components/pages/ForgotPassword").then(({ ForgotPassword }) => ({
        default: ForgotPassword,
    }))
);
const Home = lazy(() =>
    import("@/components/pages/Home").then(({ Home }) => ({ default: Home }))
);
const Login = lazy(() =>
    import("@/components/pages/Login").then(({ Login }) => ({ default: Login }))
);
const NoMatch = lazy(() =>
    import("@/components/pages/NoMatch").then(({ NoMatch }) => ({
        default: NoMatch,
    }))
);
const Policy = lazy(() =>
    import("@/components/pages/Policy").then(({ Policy }) => ({
        default: Policy,
    }))
);
const Register = lazy(() =>
    import("@/components/pages/Register").then(({ Register }) => ({
        default: Register,
    }))
);
const ResetPassword = lazy(() =>
    import("@/components/pages/ResetPassword").then(({ ResetPassword }) => ({
        default: ResetPassword,
    }))
);
const Terms = lazy(() =>
    import("@/components/pages/Terms").then(({ Terms }) => ({ default: Terms }))
);

export const Routing: VFC = () => {
    return (
        <Router>
            <ScrollToTop />
            <RecoilRoot>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Redirect exact from="/" to="/about" />
                        <Route path="/about" component={About} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/policy" component={Policy} />
                        <Route
                            path="/reset-password/:token"
                            component={ResetPassword}
                        />

                        {/* ???????????????????????????????????? */}
                        <NotLoggedInUser path="/login" component={Login} />
                        <NotLoggedInUser
                            path="/register"
                            component={Register}
                        />
                        <NotLoggedInUser
                            path="/forgot-password"
                            component={ForgotPassword}
                        />

                        {/* ??????????????????????????????????????? */}
                        <AuthUser path="/home" component={Home} />
                        <AuthUser path="/edit" component={Edit} />

                        <Route path="*" component={NoMatch} />
                    </Switch>
                    <ToastContainer position="top-center" autoClose={3000} />
                </Suspense>
            </RecoilRoot>
        </Router>
    );
};

ReactDOM.render(<Routing />, document.getElementById("app"));
