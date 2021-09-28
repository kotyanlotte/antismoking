import axios from "axios";
import { useCallback } from "react";

type GetUserReturnType = {
    getUser: () => void;
};

export const useGetUser = (): GetUserReturnType => {
    const getUser = useCallback(async () => {
        await axios
            .get("api/user")
            .then((res: any) => {
                console.log(res);
            })
            .catch(() => {
                console.log("ユーザーが取得できませんでした。");
            });
    }, []);

    return {
        getUser,
    };
};
