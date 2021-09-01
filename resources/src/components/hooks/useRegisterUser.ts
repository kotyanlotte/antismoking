import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import {
    emailState,
    nameState,
    passwordConfirmationState,
    passwordState,
} from "@/components/store/registerValueState";
import { RegisterErrorType } from "@/components/types/registerErrorType";

type UserRegisterReturnType = {
    registerUser: () => Promise<void>;
    loading: boolean;
};

export const useRegisterUser = (): UserRegisterReturnType => {
    const [name, setName] = useRecoilState(nameState);
    const [email, setEmail] = useRecoilState(emailState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        passwordConfirmationState
    );
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory<History>();

    const registerUser = useCallback(async () => {
        setLoading(true);
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
            .catch((e: RegisterErrorType) => {
                console.log(e.response.data.errors);
                toast.error("アカウントの登録に失敗しました");
                history.push("/register");
            })
            .finally(() => {
                setLoading(false);
                setName("");
                setEmail("");
                setPassword("");
                setPasswordConfirmation("");
            });
    }, [
        name,
        email,
        password,
        passwordConfirmation,
        history,
        setEmail,
        setName,
        setPassword,
        setPasswordConfirmation,
    ]);

    return { registerUser, loading };
};
