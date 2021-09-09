import React, { memo, VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";

type HeaderLinkProps = {
    to: string;
    style: string;
    text: string;
};

export const HeaderLink: VFC<HeaderLinkProps> = memo(({ to, style, text }) => {
    return (
        <Link to={to}>
            <PrimaryButton style={style}>{text}</PrimaryButton>
        </Link>
    );
});

HeaderLink.displayName = "HeaderLink";
