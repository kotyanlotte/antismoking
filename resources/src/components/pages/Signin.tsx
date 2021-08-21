import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { SignInArea } from "@/components/organisms/SignInArea";

export const Signin: VFC = () => {
    return (
        <>
            <Header />
            <SignInArea />
            <Footer />
        </>
    );
};
