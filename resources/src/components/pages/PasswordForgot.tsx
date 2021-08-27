import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { PasswordForgotArea } from "@/components/organisms/PasswordForgotArea";

export const PasswordForgot: VFC = () => {
    return (
        <>
            <Header />
            <PasswordForgotArea />
            <Footer />
        </>
    );
};
