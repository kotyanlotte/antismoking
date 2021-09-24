/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import { isLoggedInState } from "@/components/store/loginUserState";

type DestroyReturnType = {
    destroy: () => void;
    loading: boolean;
};

export const useDestroy = (): DestroyReturnType => {
    const history = useHistory<History>();

    const setLoggedIn = useSetRecoilState(isLoggedInState);

    const [loading, setLoading] = useRecoilState(isLoadingButton);

    const destroy = useCallback(async () => {
        setLoading(true);
        await axios
            .delete("api/delete")
            .then(() => {
                setLoading(false);
                setLoggedIn(false);
                toast.success("アカウントの削除に成功しました");
                history.push("/about");
            })
            .catch(() => {
                setLoading(false);
                toast.error("アカウントの削除に失敗しました");
            });
    }, [history]);

    return {
        destroy,
        loading,
    };
};
