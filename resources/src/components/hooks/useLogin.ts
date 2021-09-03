import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

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
                history.push("/home");
            })
            .catch((e: LoginErrorType) => {
                console.log(e.response.data);
                toast.error("ログインに失敗しました");
                history.push("/login");
            })
            .finally(() => {
                setEmail("");
                setPassword("");
                setLoading(false);
            });
    }, [email, password, history, setEmail, setPassword]);

    return { login, loading };
};
