import React, { VFC } from "react";

import { Footer } from "@/components/organisms/Footer";
import { CigarettesArea } from "@/components/organisms/forms/CigarettesArea";
import { Header } from "@/components/organisms/Header";

export const Home: VFC = () => {
    return (
        <>
            <Header />
            <CigarettesArea />
            <Footer />
        </>
    );
};
