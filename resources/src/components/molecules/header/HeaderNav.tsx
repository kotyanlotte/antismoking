import cc from "classcat";
import React, { VFC } from "react";
import { useRecoilValue } from "recoil";

import { LoginHeaderLink } from "@/components/molecules/header/headerLinks/LoginHeaderLink";
import { NoLoginHeaderLink } from "@/components/molecules/header/headerLinks/NoLoginHeaderLink";
import { isLoggedInState } from "@/components/store/loginUserState";

export const HeaderNav: VFC = () => {
    const isLoggedIn = useRecoilValue(isLoggedInState);

    return (
        <nav>
            <ul
                className={cc([
                    "flex mt-2",
                    {
                        "flex-col space-y-3 surface:flex-row surface:justify-center surface:space-y-0 surface:space-x-3":
                            isLoggedIn,
                        "flex-row space-x-3 surface:mt-0": !isLoggedIn,
                    },
                ])}
            >
                {isLoggedIn ? <LoginHeaderLink /> : <NoLoginHeaderLink />}
            </ul>
        </nav>
    );
};
