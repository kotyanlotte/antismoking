import React, { VFC } from "react";

import { Card } from "@/components/organisms/Card";
import { FirstViewImage } from "@/components/organisms/FirstViewImage";
import { Header } from "@/components/organisms/Header";

export const About: VFC = () => {
    return (
        <>
            <Header />
            <FirstViewImage />
            <Card />
        </>
    );
};
