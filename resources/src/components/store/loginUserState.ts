import { atom } from "recoil";

import { User } from "@/components/types/user";

export const loginUserState = atom<User | null>({
    key: "loginUserState",
    default: null,
});

export const loadingState = atom<boolean>({
    key: "loadingState",
    default: false,
});
