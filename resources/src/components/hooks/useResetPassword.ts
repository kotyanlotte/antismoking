/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import {
    resetPasswordConfirmationErrorState,
    resetPasswordEmailErrorState,
    resetPasswordErrorState,
} from "@/components/store/resetPasswordErrorState";
import {
    resetPasswordConfirmationState,
    resetPasswordEmailState,
    resetPasswordState,
} from "@/components/store/resetPasswordState";
import { resetPasswordErrorType } from "@/components/types/resetPasswordErrorType";
import { ResponseSuccessMessage } from "@/components/types/responseSuccessMessage";

type ResetPasswordReturnType = {
    resetPassword: () => void;
    loading: boolean;
};

export const useResetPassword = (): ResetPasswordReturnType => {
    const [email, setEmail] = useRecoilState(resetPasswordEmailState);
    const [password, setPassword] = useRecoilState(resetPasswordState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        resetPasswordConfirmationState
    );

    const setErrorEmail = useSetRecoilState(resetPasswordEmailErrorState);
    const setErrorPassword = useSetRecoilState(resetPasswordErrorState);
    const setErrorPasswordConfirmation = useSetRecoilState(
        resetPasswordConfirmationErrorState
    );

    const [loading, setLoading] = useRecoilState(isLoadingButton);

    const { token } = useParams<Record<string, string | undefined>>();

    const history = useHistory<History>();

    const resetPassword = useCallback(async () => {
        setLoading(true);
        await axios
            .post("/reset-password", {
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
                token: token,
            })
            .then((res: ResponseSuccessMessage) => {
                toast.success(res.data.message);
                setErrorEmail([]);
                setErrorPassword([]);
                setErrorPasswordConfirmation([]);
                setEmail("");
                setPassword("");
                setPasswordConfirmation("");
                setLoading(false);
                history.push("/login");
            })
            .catch((e: resetPasswordErrorType) => {
                setErrorEmail(e.response.data.errors.email);
                setErrorPassword(e.response.data.errors.password);
                setErrorPasswordConfirmation(
                    e.response.data.errors.password_confirmation
                );
                setEmail("");
                setPassword("");
                setPasswordConfirmation("");
                setLoading(false);
                toast.error("パスワードのリセットに失敗しました");
            });
    }, [email, password, passwordConfirmation, token, history]);

    return {
        resetPassword,
        loading,
    };
};
