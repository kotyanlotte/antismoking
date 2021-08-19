import React, { VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";

type HeaderLinkProps = {
    to: string;
    style: string;
    text: string;
};

export const HeaderLink: VFC<HeaderLinkProps> = ({ to, style, text }) => {
    return (
        <Link to={to}>
            <PrimaryButton style={style}>{text}</PrimaryButton>
        </Link>
    );
};
