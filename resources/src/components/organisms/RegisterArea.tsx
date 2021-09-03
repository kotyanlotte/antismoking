import React, { useCallback, VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { useRegister } from "@/components/hooks/useRegister";
import { RegisterForm } from "@/components/organisms/forms/RegisterForm";

export const RegisterArea: VFC = () => {
    const { register, loading } = useRegister();

    // ユーザーを登録する関数
    const onClickRegister = useCallback(() => {
        register();
    }, [register]);

    return (
        <div className="bg-gray-light py-12 flex justify-center">
            <div className="card w-650 space-y-8">
                <Link to="/login">
                    <h2 className="text-green-dark font-bold">
                        アカウントを持っている場合
                    </h2>
                </Link>
                <RegisterForm />
                <PrimaryButton
                    loading={loading}
                    style="text-green-default w-52 border-green-default hover:bg-green-default hover:text-white-default"
                    onClick={onClickRegister}
                    id={"register"}
                >
                    登録
                </PrimaryButton>
            </div>
        </div>
    );
};
