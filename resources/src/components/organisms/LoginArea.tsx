import React, { VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { LoginForm } from "@/components/organisms/forms/LoginForm";

export const LoginArea: VFC = () => {
    return (
        <div className="bg-gray-light py-12 flex justify-center">
            <div className="card w-650 space-y-6">
                <Link to="/register">
                    <h2 className="text-green-dark font-bold">
                        アカウントを持っていない場合
                    </h2>
                </Link>
                <LoginForm />
                <Link to="/password/forgot">
                    <p className="text-green-dark font-bold ">
                        パスワードを忘れた場合
                    </p>
                </Link>
                <PrimaryButton style="text-green-default w-52 border-green-default hover:bg-green-default hover:text-white-default">
                    ログイン
                </PrimaryButton>
            </div>
        </div>
    );
};
