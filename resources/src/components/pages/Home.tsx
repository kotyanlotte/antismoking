import React, { useEffect, VFC } from "react";

import { useGetUser } from "@/components/hooks/useGetUser";
import { Parameter } from "@/components/molecules/Parameter";
import { CigarettesArea } from "@/components/organisms/CigarettesArea";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

export const Home: VFC = () => {
    const { getUser } = useGetUser();

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <Header />
            <CigarettesArea />
            <Parameter />
            <Footer />
        </>
    );
};
