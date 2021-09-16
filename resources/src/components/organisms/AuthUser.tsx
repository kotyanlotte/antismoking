import React, { memo, VFC } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { isLoggedInState } from "@/components/store/loginUserState";

type AuthUserType = {
    path: "/home";
    component: React.VFC;
};

export const AuthUser: VFC<AuthUserType> = memo(({ path, component }) => {
    const isLoggedIn = useRecoilValue(isLoggedInState);

    const location = useLocation<Location>();

    return isLoggedIn ? (
        <Route path={path} component={component} />
    ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
    );
});

AuthUser.displayName = "AuthUser";
