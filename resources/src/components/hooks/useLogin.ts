import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import {
    emailLoginState,
    passwordLoginState,
} from "@/components/store/loginValueState";

type LoginReturnType = {
    login: () => Promise<void>;
};

export const useLogin = (): LoginReturnType => {
    const [email, setEmail] = useRecoilState(emailLoginState);
    const [password, setPassword] = useRecoilState(passwordLoginState);

    const history = useHistory<History>();

    const login = useCallback(async () => {
        await axios
            .post("/login", {
                email: email,
                password: password,
            })
            .then(() => {
                toast.success("ログインに成功しました");
                history.push("/home");
            })
            .catch(() => {
                toast.error("ログインに失敗しました");
                history.push("/login");
            })
            .finally(() => {
                setEmail("");
                setPassword("");
            });
    }, [email, password, history, setEmail, setPassword]);

    return { login };
};
