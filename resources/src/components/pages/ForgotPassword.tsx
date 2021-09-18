import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { ForgotPasswordArea } from "@/components/organisms/ForgotPasswordArea";
import { Header } from "@/components/organisms/Header";

export const ForgotPassword: VFC = () => {
    return (
        <>
            <Header />
            <ForgotPasswordArea />
            <Footer />
        </>
    );
};
