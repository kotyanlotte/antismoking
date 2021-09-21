import axios from "axios";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import {
    resetPasswordConfirmationState,
    resetPasswordEmailState,
    resetPasswordState,
} from "@/components/store/resetPasswordState";

type ResetPasswordReturnType = {
    resetPassword: () => void;
};

export const useResetPassword = (): ResetPasswordReturnType => {
    const [email, setEmail] = useRecoilState(resetPasswordEmailState);
    const [password, setPassword] = useRecoilState(resetPasswordState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        resetPasswordConfirmationState
    );
    const { token } = useParams<Record<string, string | undefined>>();
    console.log(token);

    const resetPassword = useCallback(async () => {
        await axios
            .post("/reset-password", {
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
                token: token,
            })
            .then((res: any) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e.response);
                setEmail("");
                setPassword("");
                setPasswordConfirmation("");
                toast.error("パスワードの再生成に失敗しました");
            });
    }, [email, password, passwordConfirmation, token]);

    return {
        resetPassword,
    };
};
