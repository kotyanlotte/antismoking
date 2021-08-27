import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { PasswordResetArea } from "@/components/organisms/PasswordResetArea";

export const PasswordReset: VFC = () => {
    return (
        <>
            <Header />
            <PasswordResetArea />
            <Footer />
        </>
    );
};
