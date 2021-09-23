import React, { VFC } from "react";

import { HeaderLink } from "@/components/molecules/header/HeaderLink";
import { LogoutModal } from "@/components/organisms/Modal";

export const LoginHeaderLink: VFC = () => {
    return (
        <>
            <HeaderLink
                to="/edit"
                style="btn-bg-green"
                loginStyle="login-btn"
                text="編集"
            />
            <HeaderLink
                to="/delete"
                style="btn-bg-green"
                loginStyle="login-btn"
                text="削除"
            />
            <LogoutModal loginStyle="login-btn" />
        </>
    );
};
