import React, { VFC } from "react";
import { useRecoilValue } from "recoil";

import { useDestroy } from "@/components/hooks/useDestroy";
import { useLogout } from "@/components/hooks/useLogout";
import { LinkButton } from "@/components/molecules/LinkButton";
import { LogoutAndDeleteModal } from "@/components/organisms/LogoutAndDeleteModal";
import { isDisabledState } from "@/components/store/disabledState";

export const LoginHeaderLink: VFC = () => {
    const { destroy } = useDestroy();
    const { logout } = useLogout();

    const isDisabled = useRecoilValue(isDisabledState);

    return (
        <>
            <LinkButton
                to="/edit"
                style="btn-bg-green"
                loginStyle="login-btn"
                text="編集"
                isDisabled={isDisabled}
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
                isDisabled={isDisabled}
            />
            <LogoutAndDeleteModal
                loginStyle="login-btn"
                text="ログアウト"
                label="Logout Modal"
                title="ログアウトしますか？"
                yes="ログアウトする"
                height="50%"
                onClick={logout}
                isDisabled={isDisabled}
            />
        </>
    );
};
