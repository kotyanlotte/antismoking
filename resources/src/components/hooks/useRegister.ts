import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import { isLoggedInState } from "@/components/store/loginUserState";
import {
    errorEmailRegisterState,
    errorNameState,
    errorPasswordConfirmationState,
    errorPasswordRegisterState,
} from "@/components/store/registerErrorState";
import {
    emailRegisterState,
    nameState,
    passwordConfirmationState,
    passwordRegisterState,
} from "@/components/store/registerValueState";
import { RegisterErrorType } from "@/components/types/registerErrorType";

type RegisterReturnType = {
    register: () => Promise<void>;
    loading: boolean;
};

export const useRegister = (): RegisterReturnType => {
    const [name, setName] = useRecoilState(nameState);
    const [email, setEmail] = useRecoilState(emailRegisterState);
    const [password, setPassword] = useRecoilState(passwordRegisterState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        passwordConfirmationState
    );
    const [loading, setLoading] = useRecoilState(isLoadingButton);

    const setErrorName = useSetRecoilState(errorNameState);
    const setErrorEmail = useSetRecoilState(errorEmailRegisterState);
    const setErrorPassword = useSetRecoilState(errorPasswordRegisterState);
    const setErrorPasswordConfirmation = useSetRecoilState(
        errorPasswordConfirmationState
    );
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);

    const history = useHistory<History>();

    const register = useCallback(async () => {
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
                setLoading(false);
                setIsLoggedIn(true);
                history.push("/home");
            })
            .catch((e: RegisterErrorType) => {
                setName("");
                setEmail("");
                setPassword("");
                setPasswordConfirmation("");
                setErrorName(e.response.data.errors.name);
                setErrorEmail(e.response.data.errors.email);
                setErrorPassword(e.response.data.errors.password);
                setErrorPasswordConfirmation(
                    e.response.data.errors.password_confirmation
                );
                setLoading(false);
                toast.error("アカウントの登録に失敗しました");
                history.push("/register");
            });
    }, [name, email, password, passwordConfirmation]);

    return { register, loading };
};
