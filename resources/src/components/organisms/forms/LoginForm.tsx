import React, { useCallback, VFC } from "react";
import { useRecoilState } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import {
    emailLoginState,
    passwordLoginState,
} from "@/components/store/loginValueState";

export const LoginForm: VFC = () => {
    const [email, setEmail] = useRecoilState(emailLoginState);
    const [password, setPassword] = useRecoilState(passwordLoginState);

    // メールアドレスを取得する関数
    const onChangeEmail = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        },
        [setEmail]
    );

    // パスワードを取得する関数
    const onChangePassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
        },
        [setPassword]
    );

    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="mail"
                placeholder="メールアドレスを入力"
                id="mail"
                value={email}
                onChange={onChangeEmail}
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                id="password"
                value={password}
                onChange={onChangePassword}
            >
                パスワード
            </FormInput>
        </form>
    );
};
