/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import {
    errorEmailLoginState,
    errorPasswordLoginState,
} from "@/components/store/loginErrorState";
import {
    emailLoginState,
    passwordLoginState,
} from "@/components/store/loginValueState";

export const LoginForm: VFC = () => {
    const [email, setEmail] = useRecoilState(emailLoginState);
    const [password, setPassword] = useRecoilState(passwordLoginState);
    const errorEmail = useRecoilValue(errorEmailLoginState);
    const errorPassword = useRecoilValue(errorPasswordLoginState);

    // メールアドレスを取得する関数
    const onChangeEmail = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        },
        []
    );

    // パスワードを取得する関数
    const onChangePassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
        },
        []
    );

    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="mail"
                placeholder="メールアドレスを入力"
                type="email"
                value={email}
                onChange={onChangeEmail}
                error={errorEmail}
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                type="password"
                value={password}
                onChange={onChangePassword}
                error={errorPassword}
            >
                パスワード
            </FormInput>
        </form>
    );
};
