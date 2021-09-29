/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";

import { cigarettesState } from "@/components/store/cigarettesState";
import { userState } from "@/components/store/userState";
import { User } from "@/components/types/userType";

type UpdateUserReturnType = {
    updateUser: () => void;
};

export const useUpdateUser = (): UpdateUserReturnType => {
    const cigarettes = useRecoilValue(cigarettesState);

    const [user, setUser] = useRecoilState(userState);

    const updateUser = useCallback(async () => {
        await axios
            .put<User>("api/user", {
                health_value:
                    Number(cigarettes) > 0
                        ? user && user?.health_value - 3 * Number(cigarettes)
                        : user && user?.health_value + 3,
                mental_value:
                    Number(cigarettes) > 0
                        ? user && user?.mental_value - 2 * Number(cigarettes)
                        : user && user?.mental_value + 2,
                brain_value:
                    Number(cigarettes) > 0
                        ? user && user?.brain_value - 1 * Number(cigarettes)
                        : user && user?.brain_value + 1,
                total_cigarettes:
                    user && user?.total_cigarettes + Number(cigarettes),
            })
            .then((res) => {
                setUser(res.data);
            })
            .catch(() => {
                toast.error("データの更新に失敗しました");
            });
    }, [cigarettes, user]);

    return {
        updateUser,
    };
};
