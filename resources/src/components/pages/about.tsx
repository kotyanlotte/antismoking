import React, { VFC } from "react";

import { Card } from "@/components/organisms/card";
import { FirstViewImage } from "@/components/organisms/firstViewImage";
import { Header } from "@/components/organisms/header";

export const About: VFC = () => {
    return (
        <>
            <Header />
            <FirstViewImage />
            <Card />
        </>
    );
};
