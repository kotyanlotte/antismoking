/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import {
    updateEmailErrorState,
    updateNameErrorState,
} from "@/components/store/update/userUpdateErrorState";
import {
    updateEmailState,
    updateNameState,
} from "@/components/store/update/userUpdateState";

export const UpdateForm: VFC = () => {
    const [name, setName] = useRecoilState(updateNameState);
    const [email, setEmail] = useRecoilState(updateEmailState);

    const errorName = useRecoilValue(updateNameErrorState);
    const errorEmail = useRecoilValue(updateEmailErrorState);

    // 名前を取得する関数
    const onChangeName = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
        },
        []
    );

    // メールアドレスを取得する関数
    const onChangeEmail = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        },
        []
    );

    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="name"
                placeholder="新しいニックネームを入力"
                type="text"
                value={name}
                onChange={onChangeName}
                error={errorName}
            >
                ニックネーム
            </FormInput>
            <FormInput
                htmlFor="mail"
                placeholder="新しいメールアドレスを入力"
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
