import React, { VFC } from "react";
import { useRecoilValue } from "recoil";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { loginUserState } from "@/components/store/loginUserState";

export const Home: VFC = () => {
    const user = useRecoilValue(loginUserState);
    console.log(user);

    return (
        <>
            <Header />
            <Footer />
        </>
    );
};
