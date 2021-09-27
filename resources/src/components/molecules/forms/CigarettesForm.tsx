import React, { VFC } from "react";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { Input } from "@/components/atoms/inputs/Input";

export const CigarettesForm: VFC = () => {
    return (
        <form className="space-y-7 flex flex-col items-center surface:flex-row surface:justify-center surface:space-y-0 surface:space-x-5 ">
            <Input type="number" min="0" style="max-w-sm" />
            <PrimaryButton style="w-32 text-sm px-10 border-green-default hover:bg-green-default hover:text-white-default surface:px-4">
                入力
            </PrimaryButton>
        </form>
    );
};
