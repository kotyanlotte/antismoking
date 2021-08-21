import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { SignUpArea } from "@/components/organisms/SignupArea";

export const Signup: VFC = () => {
    return (
        <>
            <Header />
            <SignUpArea />
            <Footer />
        </>
    );
};
