import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";

import { userState } from "@/components/store/userState";
import { User } from "@/components/types/userType";

type GetUserReturnType = {
    getUser: () => void;
};

export const useGetUser = (): GetUserReturnType => {
    const setUser = useSetRecoilState(userState);

    const getUser = useCallback(async () => {
        await axios
            .get<User>("api/user")
            .then((res) => {
                setUser(res.data);
            })
            .catch(() => {
                toast.error("ユーザーが見つかりませんでした");
            });
    }, []);

    return {
        getUser,
    };
};
