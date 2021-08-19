import React, { VFC } from "react";
import { Link } from "react-router-dom";

import { HeaderNav } from "@/components/molecules/header/HeaderNav";

export const Header: VFC = () => {
    return (
        <header className="h-28 w-11/12 mx-auto flex flex-col items-center pt-2 surface:h-24 surface:flex-row surface:items-center surface:pt-0 surface:justify-between">
            <Link to="about">
                <span className="text-4xl md:text-5xl">Anti</span>
                <span className="text-4xl text-green-default md:text-5xl">
                    Smoking
                </span>
            </Link>
            <HeaderNav />
        </header>
    );
};
