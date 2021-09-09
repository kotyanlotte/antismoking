import React, { memo, VFC } from "react";

import { Picture } from "@/components/molecules/Picture";

type CardListProps = {
    title: string;
    sentence: string[];
    srcSet: string;
    src: string;
    alt: string;
};

export const CardList: VFC<CardListProps> = memo(
    ({ title, sentence, srcSet, src, alt }) => {
        return (
            <div className="card">
                <h3 className="text-xl font-bold text-center">{title}</h3>
                <Picture srcSet={srcSet} src={src} alt={alt} />
                <div>
                    {sentence.map((items, index) => (
                        <div key={index} className="font-bold">
                            {items}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);

CardList.displayName = "CardList";
