import React, { VFC } from "react";
import { useRecoilValue } from "recoil";

import { LinkButton } from "@/components/molecules/LinkButton";
import { Picture } from "@/components/molecules/Picture";
import { isLoggedInState } from "@/components/store/login/loginUserState";
import { image } from "@/components/utils/image";

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
                <Picture
                    srcSet={image.noMatch.srcSet}
                    src={image.noMatch.src}
                    alt={image.noMatch.alt}
                    style="w-img my-0 mx-auto"
                />
                <LinkButton
                    style="btn-bg-green"
                    to={isLoggedIn ? "/home" : "/about"}
                    text="トップページへ"
                />
            </div>
        </div>
    );
};
