import axios from "axios";

export const UseGetLoginUser = () => {
    const getUser = () => {
        axios
            .get("api/user")
            .then((res) => {
                console.log(res);
            })
            .catch(() => {
                console.log("ユーザーが取得できませんでした");
            });
    };

    return { getUser };
};
