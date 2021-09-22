import React, { memo, VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";

type HeaderLinkProps = {
    to: string;
    style: string;
    loginStyle?: string;
    text: string;
};

export const HeaderLink: VFC<HeaderLinkProps> = memo(
    ({ to, style, loginStyle, text }) => {
        return (
            <Link to={to}>
                <PrimaryButton style={style} loginStyle={loginStyle}>
                    {text}
                </PrimaryButton>
            </Link>
        );
    }
);

HeaderLink.displayName = "HeaderLink";
