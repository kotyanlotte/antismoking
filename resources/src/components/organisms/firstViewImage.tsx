import React, { VFC } from "react";

export const FirstViewImage: VFC = () => {
    return (
        <div className="relative h-96">
            <picture>
                <source
                    srcSet="/images/firstViewImage/tabacco.webp"
                    type="image/webp"
                />
                <img
                    className="h-96 w-full object-cover grayscale-100 absolute"
                    src="/images/firstViewImage/tabacco.jpg"
                    alt="ファーストビュー画像"
                />
            </picture>
            <h1 className="absolute top-16 left-5 text-3xl text-white-default font-bold tracking-widest w-48 surface:w-auto">
                喫煙は最も健康に悪い
            </h1>
            <p className="absolute top-40 left-5 py-2 px-1 tracking-wider w-3/4 text-xl text-white-default font-bold bg-black-dark bg-opacity-20 max-w-320 surface:top-36">
                「AntiSmoking」はタバコが健康に与える影響を数値化します
            </p>
        </div>
    );
};
