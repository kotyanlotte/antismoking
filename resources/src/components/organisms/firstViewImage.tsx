import React, { VFC } from "react";

export const FirstViewImage: VFC = () => {
    return (
        <div className="relative">
            <img
                className="h-96 w-full object-cover grayscale-100 absolute"
                src="/images/tabacco.jpg"
                alt="ファーストビュー画像"
            />
            <h1 className="absolute top-16 left-5 text-3xl text-white-default font-bold tracking-widest">
                喫煙は最も健康に悪い
            </h1>
            <p className="absolute top-36 left-5 py-2 px-3 w-4/6 text-xl text-white-default font-bold bg-black-dark bg-opacity-20 max-w-280">
                「AntiSmoking」はタバコが健康に与える影響を数値化します
            </p>
        </div>
    );
};
