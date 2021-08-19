import React, { VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";

type HeaderLinkProps = {
    to: string;
    style: string;
};

export const HeaderLink: VFC<HeaderLinkProps> = ({ to, style }) => {
    return (
        <Link to={to}>
            <PrimaryButton style={style}>新規登録</PrimaryButton>
        </Link>
    );
};
