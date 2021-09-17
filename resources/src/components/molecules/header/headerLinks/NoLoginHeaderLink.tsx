import React, { VFC } from "react";

import { HeaderLink } from "@/components/molecules/header/HeaderLink";

export const NoLoginHeaderLink: VFC = () => {
    return (
        <>
            <HeaderLink to="/login" style="btn-bg-white" text="ログイン" />
            <HeaderLink to="/register" style="btn-bg-green" text="新規登録" />
        </>
    );
};
