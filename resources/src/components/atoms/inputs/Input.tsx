import React, { VFC } from "react";

type InputProps = {
    placeholder: string;
    id: string;
};

export const Input: VFC<InputProps> = ({ placeholder, id }) => {
    return (
        <input
            type="text"
            id={id}
            className="border rounded-md text-sm px-4 py-2 focus:outline-none focus:border-green-dark w-full placeholder-gray-dark"
            placeholder={placeholder}
        />
    );
};
