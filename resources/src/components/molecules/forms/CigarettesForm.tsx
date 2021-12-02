/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, VFC } from "react";
import { useRecoilState } from "recoil";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { NumericInput } from "@/components/atoms/inputs/NumericInput";
import { useUpdateUser } from "@/components/hooks/useUpdateUser";
import { cigarettesState } from "@/components/store/cigarettesState";

export const CigarettesForm: VFC = () => {
    const [cigarettes, setCigarettes] = useRecoilState(cigarettesState);

    const { updateUser, isDisabled, setDisabled, loading, setLoading } =
        useUpdateUser();

    // 吸ったタバコの本数を取得する関数
    const onChangeCigarettes = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setCigarettes(e.target.value.replace(/[^0-9]+/i, ""));
        },
        []
    );

    // 3秒間ボタンが押せなくなる関数
    const clickBtnAble = useCallback(() => {
        setDisabled(false);
        setLoading(false);
    }, []);

    if (isDisabled) {
        setTimeout(clickBtnAble, 3000);
    }

    return (
        <form className="space-y-7 flex flex-col items-center surface:flex-row surface:justify-center surface:space-y-0 surface:space-x-5 ">
            <NumericInput onInput={onChangeCigarettes} value={cigarettes} />
            <PrimaryButton
                onClick={updateUser}
                style="w-32 text-sm px-10 border-green-default hover:bg-green-default hover:text-white-default surface:px-4"
                isDisabled={isDisabled}
                loading={loading}
                cigarettes={cigarettes}
            >
                入力
            </PrimaryButton>
        </form>
    );
};
