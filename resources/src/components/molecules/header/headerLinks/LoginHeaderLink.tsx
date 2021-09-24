import React, { VFC } from "react";

import { useDestroy } from "@/components/hooks/useDestroy";
import { useLogout } from "@/components/hooks/useLogout";
import { HeaderLink } from "@/components/molecules/header/HeaderLink";
import { LogoutAndDeleteModal } from "@/components/organisms/LogoutAndDeleteModal";

export const LoginHeaderLink: VFC = () => {
    const { destroy } = useDestroy();
    const { logout } = useLogout();

    return (
        <>
            <HeaderLink
                to="/edit"
                style="btn-bg-green"
                loginStyle="login-btn"
                text="編集"
            />
            <LogoutAndDeleteModal
                loginStyle="login-btn"
                text="退会"
                label="Delete Modal"
                title="退会をするとユーザー情報の全てが削除されます。"
                confirm="それでもよろしいですか？"
                yes="退会する"
                height="70%"
                onClick={destroy}
            />
            <LogoutAndDeleteModal
                loginStyle="login-btn"
                text="ログアウト"
                label="Logout Modal"
                title="ログアウトしますか？"
                yes="ログアウトする"
                height="50%"
                onClick={logout}
            />
        </>
    );
};
