import React, { memo, VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";

type LinkButtonProps = {
    to: string;
    style: string;
    loginStyle?: string;
    text: string;
    isDisabled?: boolean;
};

export const LinkButton: VFC<LinkButtonProps> = memo(
    ({ to, style, loginStyle, text, isDisabled }) => {
        return (
            <Link to={to}>
                <PrimaryButton
                    style={style}
                    loginStyle={loginStyle}
                    isDisabled={isDisabled}
                >
                    {text}
                </PrimaryButton>
            </Link>
        );
    }
);

LinkButton.displayName = "LinkButton";
