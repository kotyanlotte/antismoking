import React, { useEffect, VFC } from "react";

import { UseGetLoginUser } from "@/components/hooks/useGetLoginUser";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

export const Home: VFC = () => {
    const { getUser } = UseGetLoginUser();
    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <Header />
            <Footer />
        </>
    );
};
