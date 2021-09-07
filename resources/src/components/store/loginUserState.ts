import { atom } from "recoil";

import { User } from "@/components/types/user";

export const loginUserState = atom<User | null>({
    key: "loginUserState",
    default: null,
});
