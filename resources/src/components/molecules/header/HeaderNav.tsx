import React, { VFC } from "react";
import { useRecoilValue } from "recoil";

import { LoginHeaderLink } from "@/components/molecules/header/headerLinks/LoginHeaderLink";
import { NoLoginHeaderLink } from "@/components/molecules/header/headerLinks/NoLoginHeaderLink";
import { isLoggedInState } from "@/components/store/loginUserState";

export const HeaderNav: VFC = () => {
    const isLoggedIn = useRecoilValue(isLoggedInState);

    return (
        <nav>
            <ul className="flex space-x-3 mt-2">
                {isLoggedIn ? <LoginHeaderLink /> : <NoLoginHeaderLink />}
            </ul>
        </nav>
    );
};
