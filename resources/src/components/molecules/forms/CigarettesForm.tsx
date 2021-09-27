/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, VFC } from "react";
import { useRecoilState } from "recoil";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { Input } from "@/components/atoms/inputs/Input";
import { cigarettesState } from "@/components/store/cigarettesState";

export const CigarettesForm: VFC = () => {
    const [cigarettes, setCigarettes] = useRecoilState(cigarettesState);
    console.log(cigarettes);

    // 吸ったタバコの本数を取得する関数
    const onChangeCigarettes = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setCigarettes(e.target.value.replace(/[^0-9]+/i, ""));
        },
        []
    );

    return (
        <form className="space-y-7 flex flex-col items-center surface:flex-row surface:justify-center surface:space-y-0 surface:space-x-5 ">
            <Input
                type="text"
                style="max-w-sm"
                onInput={onChangeCigarettes}
                value={cigarettes}
                placeholder="0"
            />
            <PrimaryButton style="w-32 text-sm px-10 border-green-default hover:bg-green-default hover:text-white-default surface:px-4">
                入力
            </PrimaryButton>
        </form>
    );
};
