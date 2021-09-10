import React, { VFC } from "react";
import { useRecoilValue } from "recoil";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { LoginArea } from "@/components/organisms/LoginArea";
import { loginUserState } from "@/components/store/loginUserState";

export const Login: VFC = () => {
    const user = useRecoilValue(loginUserState);
    console.log(user);

    return (
        <>
            <Header />
            <LoginArea />
            <Footer />
        </>
    );
};
