import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { RegisterArea } from "@/components/organisms/RegisterArea";

export const Register: VFC = () => {
    return (
        <>
            <Header />
            <RegisterArea />
            <Footer />
        </>
    );
};
