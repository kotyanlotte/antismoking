import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { LoginArea } from "@/components/organisms/LoginArea";

export const Login: VFC = () => {
    return (
        <>
            <Header />
            <LoginArea />
            <Footer />
        </>
    );
};
