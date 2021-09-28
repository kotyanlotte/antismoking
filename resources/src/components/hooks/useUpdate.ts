/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import {
    updateEmailErrorState,
    updateNameErrorState,
} from "@/components/store/update/userUpdateErrorState";
import {
    updateEmailState,
    updateNameState,
} from "@/components/store/update/userUpdateState";
import { UpdateErrorType } from "@/components/types/updateErrorType";

type UpdateReturnType = {
    update: () => void;
    loading: boolean;
};

export const useUpdate = (): UpdateReturnType => {
    const [name, setName] = useRecoilState(updateNameState);
    const [email, setEmail] = useRecoilState(updateEmailState);

    const setErrorName = useSetRecoilState(updateNameErrorState);
    const setErrorEmail = useSetRecoilState(updateEmailErrorState);

    const [loading, setLoading] = useRecoilState(isLoadingButton);

    const history = useHistory<History>();

    const update = useCallback(async () => {
        setLoading(true);
        await axios
            .put("user/profile-information", {
                name: name,
                email: email,
            })
            .then(() => {
                setName("");
                setEmail("");
                setErrorName([]);
                setErrorEmail([]);
                setLoading(false);
                toast.success("ユーザー情報の更新に成功しました!");
                history.push("/home");
            })
            .catch((e: UpdateErrorType) => {
                setName("");
                setEmail("");
                setErrorName(e.response.data.errors.name);
                setErrorEmail(e.response.data.errors.email);
                setLoading(false);
                toast.error("ユーザー情報の更新に失敗しました");
            });
    }, [name, email]);

    return {
        update,
        loading,
    };
};
