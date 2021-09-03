import React, { VFC } from "react";
import { useRecoilState } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import {
    emailLoginState,
    passwordLoginState,
} from "@/components/store/loginValueState";

export const LoginForm: VFC = () => {
    const [email, setEmail] = useRecoilState(emailLoginState);
    const [password, setPassword] = useRecoilState(passwordLoginState);

    console.log(email, password);
    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="mail"
                placeholder="メールアドレスを入力"
                id="mail"
                value={email}
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                id="password"
                value={password}
            >
                パスワード
            </FormInput>
        </form>
    );
};
