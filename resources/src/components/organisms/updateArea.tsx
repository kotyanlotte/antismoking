import React, { VFC } from "react";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { UpdateForm } from "@/components/organisms/forms/UpdateForm";

export const UpdateArea: VFC = () => {
    return (
        <div className="bg-gray-light py-12 flex justify-center">
            <div className="card w-650 space-y-8">
                <h2 className="text-green-dark font-bold">
                    ユーザー情報の更新
                </h2>
                <UpdateForm />
                <PrimaryButton style="text-green-default w-52 border-green-default hover:bg-green-default hover:text-white-default">
                    更新
                </PrimaryButton>
            </div>
        </div>
    );
};
