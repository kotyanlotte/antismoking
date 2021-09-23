import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { UpdateArea } from "@/components/organisms/UpdateArea";

export const Edit: VFC = () => {
    return (
        <>
            <Header />
            <UpdateArea />
            <Footer />
        </>
    );
};
