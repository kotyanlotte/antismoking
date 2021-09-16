import React, { VFC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { isLoggedInState } from "@/components/store/loginUserState";

type NotLoggedInUserProps = {
    path: "/register" | "/login";
    component: React.VFC;
};

export const NotLoggedInUser: VFC<NotLoggedInUserProps> = ({
    path,
    component,
}) => {
    const isLoggedIn = useRecoilValue(isLoggedInState);

    return isLoggedIn ? (
        <Redirect to="/home" />
    ) : (
        <Route path={path} component={component} />
    );
};
