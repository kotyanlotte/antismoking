import React, { memo, VFC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Home } from "@/components/pages/Home";
import { isLoggedInGuestState } from "@/components/store/login/loginGuestUserState";
import { isLoggedInState } from "@/components/store/login/loginUserState";

type AuthUserType = {
    path: "/home" | "/edit";
    component: React.VFC;
};

export const AuthUser: VFC<AuthUserType> = memo(({ path, component }) => {
    const isLoggedIn = useRecoilValue(isLoggedInState);
    const isLoggedInGuest = useRecoilValue(isLoggedInGuestState);

    return isLoggedInGuest ? (
        <>
            <Redirect from="/edit" to="/home" />
            <Route path="/home" component={Home} />
        </>
    ) : isLoggedIn ? (
        <Route path={path} component={component} />
    ) : (
        <Redirect to="/login" />
    );
});

AuthUser.displayName = "AuthUser";
