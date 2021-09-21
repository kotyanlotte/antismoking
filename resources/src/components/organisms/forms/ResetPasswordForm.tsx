import React, { VFC } from "react";
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

    console.log(email, password, passwordConfirmation);

    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="mail"
                placeholder="メールアドレスを入力"
                value={email}
                type="mail"
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                value={password}
                type="password"
            >
                パスワード
            </FormInput>
            <FormInput
                htmlFor="confirmation"
                placeholder="上記と同じパスワードを入力"
                value={passwordConfirmation}
                type="password"
            >
                パスワード(確認用)
            </FormInput>
        </form>
    );
};
