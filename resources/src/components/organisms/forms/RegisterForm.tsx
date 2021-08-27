import React, { useCallback, VFC } from "react";
import { useRecoilState } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import {
    emailState,
    nicknameState,
    passwordConfirmationState,
    passwordState,
} from "@/components/store/index";

export const RegisterForm: VFC = () => {
    const [nickname, setNickname] = useRecoilState(nicknameState);
    const [email, setEmail] = useRecoilState(emailState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        passwordConfirmationState
    );
    console.log(nickname, email, password, passwordConfirmation);

    // ニックネームを取得する関数
    const onChangeGetNickname = useCallback(
        (e) => {
            setNickname(e.target.value);
        },
        [setNickname]
    );

    // メールアドレスを取得する関数
    const onChangeGetEmail = useCallback(
        (e) => {
            setEmail(e.target.value);
        },
        [setEmail]
    );

    // パスワードを取得する関数
    const onChangeGetPassword = useCallback(
        (e) => {
            setPassword(e.target.value);
        },
        [setPassword]
    );

    // 再確認用パスワードを取得する関数
    const onChangeGetPasswordConfirmation = useCallback(
        (e) => {
            setPasswordConfirmation(e.target.value);
        },
        [setPasswordConfirmation]
    );

    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="nickname"
                placeholder="ニックネームを入力"
                id="nickname"
                value={nickname}
                onChange={onChangeGetNickname}
            >
                ニックネーム
            </FormInput>
            <FormInput
                htmlFor="mail"
                placeholder="メールアドレスを入力"
                id="mail"
                value={email}
                onChange={onChangeGetEmail}
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                id="password"
                value={password}
                onChange={onChangeGetPassword}
            >
                パスワード
            </FormInput>
            <FormInput
                htmlFor="confirmation"
                placeholder="上記と同じパスワードを入力"
                id="confirmation"
                value={passwordConfirmation}
                onChange={onChangeGetPasswordConfirmation}
            >
                パスワード(確認用)
            </FormInput>
        </form>
    );
};
