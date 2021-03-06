import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cc from "classcat";
import React, { memo, VFC } from "react";
import { useRecoilValue } from "recoil";

import { isLoggedInState } from "@/components/store/login/loginUserState";

type PrimaryButtonProps = {
    children: React.ReactNode;
    style?: string;
    loginStyle?: string;
    onClick?: () => void;
    loading?: boolean;
    isDisabled?: boolean;
    cigarettes?: string | number;
};

export const PrimaryButton: VFC<PrimaryButtonProps> = memo(
    ({
        children,
        style,
        loginStyle,
        onClick,
        loading,
        isDisabled,
        cigarettes,
    }) => {
        const isLoggedIn = useRecoilValue(isLoggedInState);

        return (
            <button
                className={cc([
                    `btn disabled:opacity-50 ${style}`,
                    isLoggedIn && loginStyle,
                ])}
                onClick={onClick}
                type="button"
                disabled={isDisabled === true || cigarettes === ""}
            >
                {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
            </button>
        );
    }
);

PrimaryButton.displayName = "PrimaryButton";
