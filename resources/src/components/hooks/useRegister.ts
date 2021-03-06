/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import { isLoggedInState } from "@/components/store/login/loginUserState";
import {
    errorEmailRegisterState,
    errorNameState,
    errorPasswordConfirmationState,
    errorPasswordRegisterState,
} from "@/components/store/register/registerErrorState";
import {
    emailRegisterState,
    nameState,
    passwordConfirmationState,
    passwordRegisterState,
} from "@/components/store/register/registerValueState";
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

    const setErrorName = useSetRecoilState(errorNameState);
    const setErrorEmail = useSetRecoilState(errorEmailRegisterState);
    const setErrorPassword = useSetRecoilState(errorPasswordRegisterState);
    const setErrorPasswordConfirmation = useSetRecoilState(
        errorPasswordConfirmationState
    );

    const [loading, setLoading] = useRecoilState(isLoadingButton);

    const setLoggedIn = useSetRecoilState(isLoggedInState);

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
                setName("");
                setEmail("");
                setPassword("");
                setPasswordConfirmation("");
                setErrorName([]);
                setErrorEmail([]);
                setErrorPassword([]);
                setErrorPasswordConfirmation([]);
                setLoggedIn(true);
                setLoading(false);
                toast.success("?????????????????????????????????????????????");
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
                toast.error("?????????????????????????????????????????????");
                history.push("/register");
            });
    }, [name, email, password, passwordConfirmation, history]);

    return { register, loading };
};
