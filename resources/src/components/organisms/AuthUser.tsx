import React, { memo, VFC } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import {
    isLoggedInState,
    loadingState,
} from "@/components/store/loginUserState";
import { Loading } from "@/components/utils/Loading";

type AuthUserType = {
    children: React.ReactNode;
};

export const AuthUser: VFC<AuthUserType> = memo(({ children }) => {
    const loading = useRecoilValue(loadingState);
    const isLoggedIn = useRecoilValue(isLoggedInState);

    const location = useLocation<Location>();

    return loading ? (
        <Loading />
    ) : isLoggedIn ? (
        <>{children}</>
    ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
    );
});

AuthUser.displayName = "AuthUser";
