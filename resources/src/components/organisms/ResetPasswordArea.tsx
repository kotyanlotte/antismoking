import React, { VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { ResetPasswordForm } from "@/components/organisms/forms/ResetPasswordForm";

export const ResetPasswordArea: VFC = () => {
    return (
        <div className="bg-gray-light py-12 flex justify-center">
            <div className="card w-650 space-y-12">
                <h2 className="text-green-dark font-bold">
                    パスワードのリセット
                </h2>
                <ResetPasswordForm />
                <Link to="/login">
                    <PrimaryButton style="text-green-default w-52 md:w-72 border-green-default hover:bg-green-default hover:text-white-default">
                        パスワードの更新
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    );
};