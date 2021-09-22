import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cc from "classcat";
import React, { memo, VFC } from "react";
import { useRecoilValue } from "recoil";

import { isLoggedInState } from "@/components/store/loginUserState";

type PrimaryButtonProps = {
    children: React.ReactNode;
    style?: string;
    loginStyle?: string;
    onClick?: () => void;
    loading?: boolean;
};

export const PrimaryButton: VFC<PrimaryButtonProps> = memo(
    ({ children, style, loginStyle, onClick, loading }) => {
        const isLoggedIn = useRecoilValue(isLoggedInState);

        return (
            <button
                className={cc([`btn ${style}`, isLoggedIn && loginStyle])}
                onClick={onClick}
                type="button"
            >
                {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
            </button>
        );
    }
);

PrimaryButton.displayName = "PrimaryButton";
