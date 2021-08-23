import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { TermsLists } from "@/components/organisms/TermsLists";

export const Terms: VFC = () => {
    return (
        <>
            <Header />
            <TermsLists />
            <Footer />
        </>
    );
};
