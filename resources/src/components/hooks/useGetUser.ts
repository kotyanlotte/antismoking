/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";

import { isLoggedInState } from "@/components/store/login/loginUserState";
import { userState } from "@/components/store/userState";
import { User } from "@/components/types/userType";

type GetUserReturnType = {
    getUser: () => void;
    loading: boolean;
};

export const useGetUser = (): GetUserReturnType => {
    const [loading, setLoading] = useState<boolean>(false);

    const setUser = useSetRecoilState(userState);
    const setLoggedIn = useSetRecoilState(isLoggedInState);

    const history = useHistory<History>();

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
                setLoggedIn(false);
                toast.error(
                    "ユーザーが見つかりませんでした。再度ログインし直してください"
                );
                history.push("/login");
            });
    }, []);

    return {
        getUser,
        loading,
    };
};
