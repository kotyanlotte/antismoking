import axios from "axios";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import {
    loadingState,
    loginUserState,
} from "@/components/store/loginUserState";
import { User } from "@/components/types/user";

type GetUserType = {
    getUser: () => Promise<void>;
};

export const useGetLoginUser = (): GetUserType => {
    const setUser = useSetRecoilState(loginUserState);
    const setLoading = useSetRecoilState(loadingState);

    const getUser = useCallback(async () => {
        setLoading(true);
        await axios
            .get<User>("api/user")
            .then((res) => {
                setLoading(false);
                setUser(res.data);
            })
            .catch(() => {
                setLoading(false);
                setUser(null);
            });
    }, []);

    return { getUser };
};
