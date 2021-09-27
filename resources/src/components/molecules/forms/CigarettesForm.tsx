import React, { VFC } from "react";
import { useRecoilState } from "recoil";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { Input } from "@/components/atoms/inputs/Input";
import { cigarettesState } from "@/components/store/cigarettesState";

export const CigarettesForm: VFC = () => {
    const [cigarettes, setCigarettes] = useRecoilState(cigarettesState);
    console.log(cigarettes);

    return (
        <form className="space-y-7 flex flex-col items-center surface:flex-row surface:justify-center surface:space-y-0 surface:space-x-5 ">
            <Input type="number" min="0" style="max-w-sm" value={cigarettes} />
            <PrimaryButton style="w-32 text-sm px-10 border-green-default hover:bg-green-default hover:text-white-default surface:px-4">
                入力
            </PrimaryButton>
        </form>
    );
};
