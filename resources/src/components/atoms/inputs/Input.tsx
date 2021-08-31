import React, { memo, VFC } from "react";

type InputProps = {
    placeholder: string;
    type?: string;
    id: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: VFC<InputProps> = memo(
    ({ placeholder, id, name, type, value, onChange }) => {
        return (
            <input
                type={type}
                id={id}
                name={name}
                className="border rounded-md text-sm px-4 py-2 focus:outline-none focus:border-green-dark w-full placeholder-gray-dark"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e)}
            />
        );
    }
);

Input.displayName = "Input";
