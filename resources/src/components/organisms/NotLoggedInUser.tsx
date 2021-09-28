import React, { memo, VFC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { isLoggedInState } from "@/components/store/login/loginUserState";

type NotLoggedInUserProps = {
    path: "/register" | "/login" | "/forgot-password";
    component: React.VFC;
};

export const NotLoggedInUser: VFC<NotLoggedInUserProps> = memo(
    ({ path, component }) => {
        const isLoggedIn = useRecoilValue(isLoggedInState);

        return isLoggedIn ? (
            <Redirect to="/home" />
        ) : (
            <Route path={path} component={component} />
        );
    }
);

NotLoggedInUser.displayName = "NotLoggedInUser";
