import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "loginState",
    storage: sessionStorage,
});

export const isLoggedInState = atom<boolean>({
    key: "isLoggedInState",
    default: false,
    effects_UNSTABLE: [persistAtom],
});
