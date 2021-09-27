import React, { memo, VFC } from "react";

type InputProps = {
    placeholder?: string;
    id?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: string;
    style?: string;
};

export const Input: VFC<InputProps> = memo(
    ({ placeholder, type, value, onChange, id, min, style }) => {
        return (
            <input
                type={type}
                className={`border rounded-md text-sm px-4 py-2 focus:outline-none focus:border-green-dark w-full placeholder-gray-dark ${style}`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e)}
                id={id}
                min={min}
            />
        );
    }
);

Input.displayName = "Input";
