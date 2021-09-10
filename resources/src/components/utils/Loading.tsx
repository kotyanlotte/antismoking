import React, { VFC } from "react";
import Loader from "react-loader-spinner";

export const Loading: VFC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Loader type="Triangle" color="#6EE7B7" height={200} width={200} />
        </div>
    );
};
