import React, { VFC } from "react";

import { Card } from "@/components/organisms/Card";
import { FirstViewImage } from "@/components/organisms/FirstViewImage";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

export const About: VFC = () => {
    return (
        <>
            <Header />
            <FirstViewImage />
            <Card />
            <Footer />
        </>
    );
};
