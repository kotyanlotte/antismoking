import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { VFC } from "react";

type PrimaryButtonProps = {
    children: React.ReactNode;
    style: string;
    onClick?: () => void;
    loading?: boolean;
};

export const PrimaryButton: VFC<PrimaryButtonProps> = ({
    children,
    style,
    onClick,
    loading,
}) => {
    return (
        <button className={`btn ${style}`} onClick={onClick} type="button">
            {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
        </button>
    );
};
