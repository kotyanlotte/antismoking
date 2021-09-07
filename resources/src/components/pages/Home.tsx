import React, { useEffect, VFC } from "react";

import { useGetLoginUser } from "@/components/hooks/useGetLoginUser";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

export const Home: VFC = () => {
    const { getUser } = useGetLoginUser();
    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <>
            <Header />
            <Footer />
        </>
    );
};
