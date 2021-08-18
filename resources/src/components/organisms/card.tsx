import React, { VFC } from "react";

import { CardLists } from "@/components/molecules/CardLists";

export const Card: VFC = () => {
    return (
        <div className="flex flex-col bg-yellow-light">
            <h2 className="text-3xl font-bold my-8 text-center">できること</h2>
            <CardLists />
        </div>
    );
};
