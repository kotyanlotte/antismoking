import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";

import {
    emailState,
    nameState,
    passwordConfirmationState,
    passwordState,
} from "@/components/store/index";

type UserRegisterReturnType = {
    registerUser: () => Promise<void>;
};

export const useRegisterUser = (): UserRegisterReturnType => {
    const name = useRecoilValue(nameState);
    const email = useRecoilValue(emailState);
    const password = useRecoilValue(passwordState);
    const passwordConfirmation = useRecoilValue(passwordConfirmationState);
    const history = useHistory<History>();

    const registerUser = useCallback(async () => {
        await axios
            .post("/register", {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
            })
            .then(() => {
                toast.success("アカウントの登録に成功しました");
                history.push("/home");
            })
            .catch(() => {
                toast.error("アカウントの登録に失敗しました");
                history.push("/register");
            });
    }, [name, email, password, passwordConfirmation, history]);

    return { registerUser };
};
