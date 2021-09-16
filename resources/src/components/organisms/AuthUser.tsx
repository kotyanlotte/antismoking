import React, { memo, VFC } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import {
    isLoggedInState,
    loadingState,
} from "@/components/store/loginUserState";
import { Loading } from "@/components/utils/Loading";

type AuthUserType = {
    path: "/home";
    component: React.VFC;
};

export const AuthUser: VFC<AuthUserType> = memo(({ path, component }) => {
    const loading = useRecoilValue(loadingState);
    const isLoggedIn = useRecoilValue(isLoggedInState);

    const location = useLocation<Location>();

    return loading ? (
        <Loading />
    ) : isLoggedIn ? (
        <Route path={path} component={component} />
    ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
    );
});

AuthUser.displayName = "AuthUser";
