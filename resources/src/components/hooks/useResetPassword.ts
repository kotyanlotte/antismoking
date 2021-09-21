import axios from "axios";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

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

    const { token } = useParams<Record<string, string | undefined>>();

    const resetPassword = useCallback(async () => {
        await axios
            .post("/reset-password", {
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
                token: token,
            })
            .then((res: ResponseSuccessMessage) => {
                toast.success(res.data.message);
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
                toast.error("パスワードのリセットに失敗しました");
            });
    }, [email, password, passwordConfirmation, token]);

    return {
        resetPassword,
    };
};
