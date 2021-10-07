import React, { VFC } from "react";
import { useRecoilValue } from "recoil";

import { HeaderLink } from "@/components/molecules/header/HeaderLink";
import { isLoggedInState } from "@/components/store/login/loginUserState";

export const NoMatch: VFC = () => {
    const isLoggedIn = useRecoilValue(isLoggedInState);

    return (
        <div className="bg-gray-light">
            <div className="flex flex-col items-center justify-center h-screen space-y-5">
                <h1 className="font-bold">
                    このページは見つかりませんでした。
                </h1>
                <p className="text-xs mb-5">
                    ページが削除されているか、URLが誤っている可能性があります。
                </p>
                <picture>
                    <source
                        srcSet="images/404page/undraw_page_not_found.webp"
                        type="image/webp"
                    />
                    <img
                        className="w-img my-0 mx-auto"
                        src="/images/404page/undraw_page_not_found.jpg"
                        alt="page not found"
                    />
                </picture>
                <HeaderLink
                    style="btn-bg-green"
                    to={isLoggedIn ? "/home" : "/about"}
                    text="トップページへ"
                />
            </div>
        </div>
    );
};
