import { atom } from "recoil";

export const resetLinkEmailState = atom<string>({
    key: "resetLinkEmailState",
    default: "",
});
