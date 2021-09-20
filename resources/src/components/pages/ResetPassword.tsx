import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { ResetPasswordArea } from "@/components/organisms/ResetPasswordArea";

export const ResetPassword: VFC = () => {
    return (
        <>
            <Header />
            <ResetPasswordArea />
            <Footer />
        </>
    );
};
