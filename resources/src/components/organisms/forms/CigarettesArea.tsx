import React, { VFC } from "react";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { FormInput } from "@/components/molecules/forms/FormInput";

export const CigarettesArea: VFC = () => {
    return (
        <div className="bg-gray-light py-12 flex justify-center">
            <div className="card w-650 space-y-6">
                <FormInput
                    htmlFor="tabacco"
                    placeholder="タバコの本数"
                    type="number"
                    min="0"
                >
                    吸ったタバコの本数を入力してください。
                </FormInput>
                <PrimaryButton style="px-10 border-green-default hover:bg-green-default hover:text-white-default">
                    入力
                </PrimaryButton>
            </div>
        </div>
    );
};
