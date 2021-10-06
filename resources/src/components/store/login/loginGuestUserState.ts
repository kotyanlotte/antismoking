import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "loginGuestState",
    storage: sessionStorage,
});

export const isLoggedInGuestState = atom<boolean>({
    key: "isLoggedInGuestState",
    default: false,
    effects_UNSTABLE: [persistAtom],
});
