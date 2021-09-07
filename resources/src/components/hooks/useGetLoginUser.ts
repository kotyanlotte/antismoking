import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";

import { loginUserState } from "@/components/store/loginUserState";
import { User } from "@/components/types/user";

type GetUserType = {
    getUser: () => Promise<void>;
};

export const useGetLoginUser = (): GetUserType => {
    const setUser = useSetRecoilState(loginUserState);
    const history = useHistory<History>();

    const getUser = useCallback(async () => {
        await axios
            .get<User>("api/user")
            .then((res) => {
                setUser(res.data);
            })
            .catch(() => {
                toast.error(
                    "ユーザーが見つかりません、再度ログインしてください"
                );
                history.push("/login");
            });
    }, [setUser, history]);

    return { getUser };
};
