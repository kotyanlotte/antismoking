import React, { VFC } from "react";

import { CigarettesArea } from "@/components/organisms/CigarettesArea";
import { Footer } from "@/components/organisms/Footer";
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
