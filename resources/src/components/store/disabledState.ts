import { atom } from "recoil";

export const isDisabledState = atom<boolean>({
    key: "isDisabledState",
    default: false,
});
