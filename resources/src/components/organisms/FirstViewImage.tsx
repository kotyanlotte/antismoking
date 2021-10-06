import React, { VFC } from "react";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { useGuestLogin } from "@/components/hooks/useGuestLogin";
import { Picture } from "@/components/molecules/Picture";
import { image } from "@/components/utils/image";

export const FirstViewImage: VFC = () => {
    const { guestLogin } = useGuestLogin();

    return (
        <div className="relative h-96">
            <Picture
                srcSet={image.tabacco.srcSet}
                src={image.tabacco.src}
                alt={image.tabacco.alt}
                style={"h-96 w-full object-cover grayscale-100 absolute"}
            />
            <h1 className="absolute top-16 left-5 text-3xl text-white-default font-bold tracking-widest w-48 surface:w-auto">
                喫煙は最も健康に悪い
            </h1>
            <p className="absolute top-40 left-5 py-2 px-1 tracking-wider w-3/4 text-xl text-white-default font-bold bg-black-dark bg-opacity-20 max-w-320 surface:top-36">
                「AntiSmoking」はタバコが健康に与える影響を数値化します
            </p>
            <PrimaryButton
                onClick={guestLogin}
                style="absolute top-72 left-1/2 -translate-x-1/2 text-green-default bg-white-default border-green-default"
            >
                テストログイン
            </PrimaryButton>
        </div>
    );
};
