import React, { useCallback, VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
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

export const RegisterForm: VFC = () => {
    const [name, setName] = useRecoilState(nameState);
    const [email, setEmail] = useRecoilState(emailRegisterState);
    const [password, setPassword] = useRecoilState(passwordRegisterState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        passwordConfirmationState
    );
    const nameError = useRecoilValue(errorNameState);
    const emailError = useRecoilValue(errorEmailState);
    const passwordError = useRecoilValue(errorPasswordState);
    const passwordConfirmationError = useRecoilValue(
        errorPasswordConfirmationState
    );

    // ニックネームを取得する関数
    const onChangeName = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
        },
        [setName]
    );

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

    // 再確認用パスワードを取得する関数
    const onChangePasswordConfirmation = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordConfirmation(e.target.value);
        },
        [setPasswordConfirmation]
    );

    return (
        <form className="space-y-9" id="register">
            <FormInput
                htmlFor="name"
                type="text"
                placeholder="ニックネームを入力"
                id="name"
                name="name"
                value={name}
                onChange={onChangeName}
                error={nameError}
            >
                ニックネーム
            </FormInput>
            <FormInput
                htmlFor="mail"
                type="email"
                placeholder="メールアドレスを入力"
                id="mail"
                name="mail"
                value={email}
                onChange={onChangeEmail}
                error={emailError}
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                type="password"
                placeholder="パスワードを入力"
                id="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                error={passwordError}
            >
                パスワード
            </FormInput>
            <FormInput
                htmlFor="passwordConfirmation"
                type="password"
                placeholder="上記と同じパスワードを入力"
                id="passwordConfirmation"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={onChangePasswordConfirmation}
                error={passwordConfirmationError}
            >
                パスワード(確認用)
            </FormInput>
        </form>
    );
};
