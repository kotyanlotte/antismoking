import React, { VFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Card } from "@/components/organisms/card";
import { FirstViewImage } from "@/components/organisms/firstViewImage";
import { Header } from "@/components/organisms/header";
import { Signin } from "@/components/pages/signin";

export const About: VFC = () => {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route path="/signin" component={Signin} />
                </Switch>
            </Router>
            <FirstViewImage />
            <Card />
        </>
    );
};
