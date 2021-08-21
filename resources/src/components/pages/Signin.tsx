import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { SignArea } from "@/components/organisms/SignArea";

export const Signin: VFC = () => {
    return (
        <>
            <Header />
            <SignArea />
            <Footer />
        </>
    );
};
