import { atom } from "recoil";

import { User } from "@/components/types/userType";

export const userState = atom<null | User>({
    key: "userState",
    default: null,
});
