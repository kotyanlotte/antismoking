import React, { VFC } from "react";
import Loader from "react-loader-spinner";

export const Loading: VFC = () => {
    return (
        <div className="flex items-center justify-center h-400">
            <Loader type="TailSpin" color="#6EE7B7" height={80} width={80} />
        </div>
    );
};
