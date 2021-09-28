/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import { resetLinkEmailErrorState } from "@/components/store/reset/resetLinkEmailErrorState";
import { resetLinkEmailState } from "@/components/store/reset/resetLinkEmailState";

export const ForgotPasswordForm: VFC = () => {
    const [email, setEmail] = useRecoilState(resetLinkEmailState);

    const errorEmail = useRecoilValue(resetLinkEmailErrorState);

    // パスワードリセットリンク発行のためのメールアドレスを取得する関数
    const onChangeEmail = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        },
        []
    );

    return (
        <form>
            <FormInput
                htmlFor="email"
                placeholder="メールアドレスを入力"
                type="email"
                value={email}
                onChange={onChangeEmail}
                error={errorEmail}
            >
                メールアドレス
            </FormInput>
        </form>
    );
};
