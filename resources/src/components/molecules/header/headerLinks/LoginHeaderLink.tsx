import React, { VFC } from "react";

import { HeaderLink } from "@/components/molecules/header/HeaderLink";

export const LoginHeaderLink: VFC = () => {
    return (
        <>
            <HeaderLink to="/edit" style="btn-bg-green" text="編集" />
            <HeaderLink to="/delete" style="btn-bg-green" text="削除" />
            <HeaderLink to="/logout" style="btn-bg-green" text="ログアウト" />
        </>
    );
};
