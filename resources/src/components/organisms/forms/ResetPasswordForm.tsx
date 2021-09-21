/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, VFC } from "react";
import { useRecoilState } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import {
    resetPasswordConfirmationState,
    resetPasswordEmailState,
    resetPasswordState,
} from "@/components/store/resetPasswordState";

export const ResetPasswordForm: VFC = () => {
    const [email, setEmail] = useRecoilState(resetPasswordEmailState);
    const [password, setPassword] = useRecoilState(resetPasswordState);
    const [passwordConfirmation, setPasswordConfirmation] = useRecoilState(
        resetPasswordConfirmationState
    );

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
    // 確認用パスワードを取得する関数
    const onChangePasswordConfirmation = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordConfirmation(e.target.value);
        },
        []
    );

    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="mail"
                placeholder="メールアドレスを入力"
                value={email}
                type="mail"
                onChange={onChangeEmail}
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                value={password}
                type="password"
                onChange={onChangePassword}
            >
                パスワード
            </FormInput>
            <FormInput
                htmlFor="confirmation"
                placeholder="上記と同じパスワードを入力"
                value={passwordConfirmation}
                type="password"
                onChange={onChangePasswordConfirmation}
            >
                パスワード(確認用)
            </FormInput>
        </form>
    );
};
