import React, { useCallback, VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
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

export const RegisterForm: VFC = () => {
    const [name, setName] = useRecoilState(nameState);
    const [email, setEmail] = useRecoilState(emailRegisterState);
    const [password, setPassword] = useRecoilState(passwordRegisterState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        passwordConfirmationState
    );
    const errorName = useRecoilValue(errorNameState);
    const errorEmail = useRecoilValue(errorEmailRegisterState);
    const errorPassword = useRecoilValue(errorPasswordRegisterState);
    const errorPasswordConfirmation = useRecoilValue(
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
        <form className="space-y-9">
            <FormInput
                htmlFor="name"
                type="text"
                placeholder="ニックネームを入力"
                value={name}
                onChange={onChangeName}
                error={errorName}
            >
                ニックネーム
            </FormInput>
            <FormInput
                htmlFor="mail"
                type="email"
                placeholder="メールアドレスを入力"
                value={email}
                onChange={onChangeEmail}
                error={errorEmail}
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                type="password"
                placeholder="パスワードを入力"
                value={password}
                onChange={onChangePassword}
                error={errorPassword}
            >
                パスワード
            </FormInput>
            <FormInput
                htmlFor="passwordConfirmation"
                type="password"
                placeholder="上記と同じパスワードを入力"
                value={passwordConfirmation}
                onChange={onChangePasswordConfirmation}
                error={errorPasswordConfirmation}
            >
                パスワード(確認用)
            </FormInput>
        </form>
    );
};
