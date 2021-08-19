import React, { VFC } from "react";

type PrimaryButtonProps = {
    children: React.ReactNode;
    style: string;
};

export const PrimaryButton: VFC<PrimaryButtonProps> = ({ children, style }) => {
    return <button className={`btn ${style}`}>{children}</button>;
};
