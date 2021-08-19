import React, { VFC } from "react";

type PictureProps = {
    srcSet: string;
    src: string;
    alt: string;
    style?: string;
};

export const Picture: VFC<PictureProps> = ({ srcSet, src, alt, style }) => {
    return (
        <picture>
            <source srcSet={srcSet} type="image/webp" />
            <img src={src} alt={alt} className={style} />
        </picture>
    );
};
