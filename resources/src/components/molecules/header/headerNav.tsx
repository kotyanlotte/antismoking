import React, { VFC } from "react";

import { HeaderLink } from "@/components/molecules/header/headerLink";

export const HeaderNav: VFC = () => {
    return (
        <nav>
            <ul className="flex space-x-3 mt-2">
                <HeaderLink
                    to="/signin"
                    style={
                        "bg-green-default border-green-default text-white-default hover:bg-green-dark hover:border-green-dark"
                    }
                />
                <HeaderLink
                    to="/signup"
                    style="text-green-default border-green-default hover:bg-green-default hover:text-white-default"
                />
            </ul>
        </nav>
    );
};
