import React, { VFC } from "react";

import { HeaderLink } from "@/components/molecules/header/HeaderLink";

export const HeaderNav: VFC = () => {
    return (
        <nav>
            <ul className="flex space-x-3 mt-2">
                <HeaderLink
                    to="/login"
                    style={
                        "text-green-default border-green-default hover:bg-green-default hover:text-white-default"
                    }
                    text="ログイン"
                />
                <HeaderLink
                    to="/register"
                    style="bg-green-default border-green-default text-white-default hover:bg-green-dark hover:border-green-dark"
                    text="新規登録"
                />
            </ul>
        </nav>
    );
};
