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
            className="border rounded-md px-4 py-1 focus:outline-none focus:border-green-dark w-full"
            placeholder={placeholder}
        />
    );
};
