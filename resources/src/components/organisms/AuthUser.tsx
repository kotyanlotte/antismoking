import React, { memo, VFC } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import {
    loadingState,
    loginUserState,
} from "@/components/store/loginUserState";

type AuthUserType = {
    children: React.ReactNode;
};

export const AuthUser: VFC<AuthUserType> = memo(({ children }) => {
    const user = useRecoilValue(loginUserState);
    const loading = useRecoilValue(loadingState);

    const location = useLocation<Location>();

    return loading ? (
        <h1>Loading</h1>
    ) : user ? (
        <>{children}</>
    ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
    );
});

AuthUser.displayName = "AuthUser";
