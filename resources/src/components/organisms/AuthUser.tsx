import React, { VFC } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { loginUserState } from "@/components/store/loginUserState";

type AuthUserType = {
    children: React.ReactNode;
};

export const AuthUser: VFC<AuthUserType> = ({ children }) => {
    const user = useRecoilValue(loginUserState);
    const location = useLocation<Location>();

    return user ? (
        <>{children}</>
    ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
    );
};
