import axios from "axios";
import { useCallback } from "react";

import { User } from "@/components/types/user";

type GetUserType = {
    getUser: () => Promise<void>;
};

export const UseGetLoginUser = (): GetUserType => {
    const getUser = useCallback(async () => {
        await axios
            .get<User>("api/user")
            .then((res) => {
                console.log(res);
            })
            .catch(() => {
                console.log("ユーザーが取得できませんでした");
            });
    }, []);

    return { getUser };
};
