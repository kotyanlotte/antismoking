import React, { memo, VFC } from "react";

type InputProps = {
    placeholder: string;
    id: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: VFC<InputProps> = memo(
    ({ placeholder, type, value, onChange, id }) => {
        return (
            <input
                type={type}
                className="border rounded-md text-sm px-4 py-2 focus:outline-none focus:border-green-dark w-full placeholder-gray-dark"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e)}
                id={id}
            />
        );
    }
);

Input.displayName = "Input";
