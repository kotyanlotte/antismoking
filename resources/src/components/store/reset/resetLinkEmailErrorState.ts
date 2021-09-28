import { atom } from "recoil";

export const resetLinkEmailErrorState = atom<string[]>({
    key: "resetLinkEmailErrorState",
    default: [],
});
