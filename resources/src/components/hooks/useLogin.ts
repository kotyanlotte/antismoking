/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import {
    errorEmailLoginState,
    errorPasswordLoginState,
} from "@/components/store/loginErrorState";
import { isLoggedInState } from "@/components/store/loginUserState";
import {
    emailLoginState,
    passwordLoginState,
} from "@/components/store/loginValueState";
import { LoginErrorType } from "@/components/types/loginErrorType";

type LoginReturnType = {
    login: () => Promise<void>;
    loading: boolean;
};

export const useLogin = (): LoginReturnType => {
    const [email, setEmail] = useRecoilState(emailLoginState);
    const [password, setPassword] = useRecoilState(passwordLoginState);
    const [loading, setLoading] = useRecoilState(isLoadingButton);

    const setErrorEmail = useSetRecoilState(errorEmailLoginState);
    const setErrorPassword = useSetRecoilState(errorPasswordLoginState);
    const setLoggedIn = useSetRecoilState(isLoggedInState);

    const history = useHistory<History>();

    const login = useCallback(async () => {
        setLoading(true);
        await axios.get("/sanctum/csrf-cookie").then(() => {
            axios
                .post("/login", {
                    email: email,
                    password: password,
                })
                .then(() => {
                    toast.success("ログインに成功しました");
                    setEmail("");
                    setPassword("");
                    setLoading(false);
                    setLoggedIn(true);
                    setErrorEmail([]);
                    setErrorPassword([]);
                    history.push("/home");
                })
                .catch((e: LoginErrorType) => {
                    setEmail("");
                    setPassword("");
                    setErrorEmail(e.response.data.errors.email);
                    setErrorPassword(e.response.data.errors.password);
                    setLoading(false);
                    toast.error("ログインに失敗しました");
                    history.push("/login");
                });
        });
    }, [email, password, history]);

    return { login, loading };
};
