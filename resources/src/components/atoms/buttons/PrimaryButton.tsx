import React, { VFC } from "react";

type PrimaryButtonProps = {
    children: React.ReactNode;
    style: string;
    id?: string;
    onClick?: () => void;
};

export const PrimaryButton: VFC<PrimaryButtonProps> = ({
    children,
    style,
    id,
    onClick,
}) => {
    return (
        <button
            className={`btn ${style}`}
            onClick={onClick}
            form={id}
            type="button"
        >
            {children}
        </button>
    );
};
