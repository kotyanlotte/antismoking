import React, { memo, VFC } from "react";

type InputProps = {
    placeholder?: string;
    id?: string;
    type?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: VFC<InputProps> = memo(
    ({ placeholder, type, value, onChange, id, onInput }) => {
        return (
            <input
                type={type}
                className={`input`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e)}
                id={id}
                onInput={onInput}
            />
        );
    }
);

Input.displayName = "Input";
