import React, { VFC } from "react";

import { CardList } from "@/components/atoms/CardList";
import { appExplanation } from "@/components/utils/appExplanation";
import { image } from "@/components/utils/image";

export const CardLists: VFC = () => {
    return (
        <div className="md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <CardList
                title={appExplanation.charts.title}
                sentence={appExplanation.charts.sentence}
                srcSet={image.chats.srcSet}
                src={image.chats.src}
                alt={image.chats.alt}
            />
            <CardList
                title={appExplanation.cal.title}
                sentence={appExplanation.cal.sentence}
                srcSet={image.cal.srcSet}
                src={image.cal.src}
                alt={image.cal.alt}
            />
            <CardList
                title={appExplanation.study.title}
                sentence={appExplanation.study.sentence}
                srcSet={image.study.srcSet}
                src={image.study.src}
                alt={image.study.alt}
            />
        </div>
    );
};
