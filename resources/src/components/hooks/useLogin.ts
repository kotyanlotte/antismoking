import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
    errorEmailLoginState,
    errorPasswordLoginState,
} from "@/components/store/loginErrorState";
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
    const setErrorEmail = useSetRecoilState(errorEmailLoginState);
    const setErrorPassword = useSetRecoilState(errorPasswordLoginState);
    const [loading, setLoading] = useState<boolean>(false);

    const history = useHistory<History>();

    const login = useCallback(async () => {
        setLoading(true);
        await axios
            .post("/login", {
                email: email,
                password: password,
            })
            .then(() => {
                toast.success("ログインに成功しました");
                setLoading(false);
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
    }, [
        email,
        password,
        history,
        setEmail,
        setPassword,
        setErrorEmail,
        setErrorPassword,
    ]);

    return { login, loading };
};
