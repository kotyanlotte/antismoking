import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { PrivacyLists } from "@/components/organisms/PrivacyLists";

export const Privacy: VFC = () => {
    return (
        <>
            <Header />
            <PrivacyLists />
            <Footer />
        </>
    );
};
