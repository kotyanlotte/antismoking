import React, { VFC } from "react";
import { useRecoilState } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import {
    updateEmailState,
    updateNameState,
} from "@/components/store/userUpdate";

export const UpdateForm: VFC = () => {
    const [name, setName] = useRecoilState(updateNameState);
    const [email, seEmail] = useRecoilState(updateEmailState);

    console.log(name, email);

    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="name"
                placeholder="新しいニックネームを入力"
                type="text"
                value={name}
            >
                ニックネーム
            </FormInput>
            <FormInput
                htmlFor="mail"
                placeholder="新しいメールアドレスを入力"
                type="email"
                value={email}
            >
                メールアドレス
            </FormInput>
        </form>
    );
};
