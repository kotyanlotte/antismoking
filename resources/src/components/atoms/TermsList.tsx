import React, { memo, VFC } from "react";

type TermsListProps = {
    description: {
        heading: string;
        lists?: string[];
        paragraphe?: string;
    };
};

export const TermsList: VFC<TermsListProps> = memo(({ description }) => {
    return (
        <div className="mb-5">
            <h2 className="font-bold text-xl mb-3 flex justify-center">
                {description.heading}
            </h2>
            <p className="mb-2">{description.paragraphe}</p>
            <ol className="space-y-1 ">
                {description.lists?.map((des, index) => (
                    <li key={index} className="before:content-['・']">
                        {des}
                    </li>
                ))}
            </ol>
        </div>
    );
});

TermsList.displayName = "TermsList";
