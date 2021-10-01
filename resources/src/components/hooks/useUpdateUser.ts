/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import { cigarettesState } from "@/components/store/cigarettesState";
import { isDisabledState } from "@/components/store/disabledState";
import { userState } from "@/components/store/userState";
import { User } from "@/components/types/userType";

type UpdateUserReturnType = {
    updateUser: () => void;
    isDisabled: boolean;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    setLoading: SetterOrUpdater<boolean>;
};

export const useUpdateUser = (): UpdateUserReturnType => {
    const cigarettes = useRecoilValue(cigarettesState);

    const [user, setUser] = useRecoilState(userState);

    const [loading, setLoading] = useRecoilState(isLoadingButton);
    const [isDisabled, setDisabled] = useRecoilState(isDisabledState);

    const updateUser = useCallback(async () => {
        await axios
            .put<User>("api/user", {
                health_value:
                    Number(cigarettes) > 0
                        ? user!.health_value - 3 * Number(cigarettes)
                        : user!.health_value + 3,
                mental_value:
                    Number(cigarettes) > 0
                        ? user!.mental_value - 2 * Number(cigarettes)
                        : user!.mental_value + 2,
                brain_value:
                    Number(cigarettes) > 0
                        ? user!.brain_value - 1 * Number(cigarettes)
                        : user!.brain_value + 1,
                total_cigarettes: user!.total_cigarettes + Number(cigarettes),
            })
            .then((res) => {
                setUser(res.data);
                setDisabled(true);
                setLoading(true);
            })
            .catch(() => {
                toast.error(
                    "データの更新に失敗しました。しばらくお待ちください。"
                );
                setDisabled(true);
                setLoading(true);
            });
    }, [cigarettes, user]);

    return {
        updateUser,
        isDisabled,
        setDisabled,
        loading,
        setLoading,
    };
};
