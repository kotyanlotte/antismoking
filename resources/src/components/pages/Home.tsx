/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, VFC } from "react";

import { useGetUser } from "@/components/hooks/useGetUser";
import { Loading } from "@/components/molecules/Loading";
import { Parameter } from "@/components/molecules/Parameter";
import { CigarettesArea } from "@/components/organisms/CigarettesArea";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

export const Home: VFC = () => {
    const { getUser, loading } = useGetUser();

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <Header />
            <CigarettesArea />
            {loading ? <Loading /> : <Parameter />}
            <Footer />
        </>
    );
};
