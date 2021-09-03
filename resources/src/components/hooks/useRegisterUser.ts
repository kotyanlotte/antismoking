import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
    errorEmailState,
    errorNameState,
    errorPasswordConfirmationState,
    errorPasswordState,
} from "@/components/store/registerErrorState";
import {
    emailRegisterState,
    nameState,
    passwordConfirmationState,
    passwordRegisterState,
} from "@/components/store/registerValueState";
import { RegisterErrorType } from "@/components/types/registerErrorType";

type UserRegisterReturnType = {
    registerUser: () => Promise<void>;
    loading: boolean;
};

export const useRegisterUser = (): UserRegisterReturnType => {
    const [name, setName] = useRecoilState(nameState);
    const [email, setEmail] = useRecoilState(emailRegisterState);
    const [password, setPassword] = useRecoilState(passwordRegisterState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        passwordConfirmationState
    );
    const setNameError = useSetRecoilState(errorNameState);
    const setEmailError = useSetRecoilState(errorEmailState);
    const setPasswordError = useSetRecoilState(errorPasswordState);
    const setPasswordConfirmationError = useSetRecoilState(
        errorPasswordConfirmationState
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
                setNameError(e.response.data.errors.name);
                setEmailError(e.response.data.errors.email);
                setPasswordError(e.response.data.errors.password);
                setPasswordConfirmationError(
                    e.response.data.errors.password_confirmation
                );
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
        setNameError,
        setEmailError,
        setPasswordError,
        setPasswordConfirmationError,
    ]);

    return { registerUser, loading };
};
