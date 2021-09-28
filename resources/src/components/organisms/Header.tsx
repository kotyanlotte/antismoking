import cc from "classcat";
import React, { VFC } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { HeaderNav } from "@/components/molecules/header/HeaderNav";
import { isLoggedInState } from "@/components/store/login/loginUserState";

export const Header: VFC = () => {
    const isLoggedIn = useRecoilValue(isLoggedInState);

    return (
        <header
            className={cc([
                "w-11/12 mx-auto flex flex-col items-center pt-2 ",
                {
                    "h-56 surface:h-28 md:h-32 lg:h-28 lg:flex-row lg:pt-0 lg:justify-between":
                        isLoggedIn,
                    "h-28 surface:h-24 surface:flex-row surface:pt-0 surface:justify-between":
                        !isLoggedIn,
                },
            ])}
        >
            <Link to={isLoggedIn ? "/home" : "/about"}>
                <span className="text-4xl md:text-5xl">Anti</span>
                <span className="text-4xl text-green-default md:text-5xl">
                    Smoking
                </span>
            </Link>
            <HeaderNav />
        </header>
    );
};
