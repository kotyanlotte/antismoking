import { atom } from "recoil";

export const isLoadingButton = atom<boolean>({
    key: "isLoadingButton",
    default: false,
});
