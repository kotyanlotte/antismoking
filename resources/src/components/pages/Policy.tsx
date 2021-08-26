import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { PolicyLists } from "@/components/organisms/PolicyLists";

export const Policy: VFC = () => {
    return (
        <>
            <Header />
            <PolicyLists />
            <Footer />
        </>
    );
};
