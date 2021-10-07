import React, { VFC } from "react";

import { LinkButton } from "@/components/molecules/LinkButton";

export const NoLoginHeaderLink: VFC = () => {
    return (
        <>
            <LinkButton to="/login" style="btn-bg-white" text="ログイン" />
            <LinkButton to="/register" style="btn-bg-green" text="新規登録" />
        </>
    );
};
