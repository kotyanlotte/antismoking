import React, { memo, VFC } from "react";
import { useLocation } from "react-router-dom";

import { Input } from "@/components/atoms/inputs/Input";

type FormInputProps = {
    htmlFor: string;
    type?: string;
    placeholder: string;
    children: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string[];
    min?: string;
};

export const FormInput: VFC<FormInputProps> = memo(
    ({ htmlFor, placeholder, type, children, value, onChange, error, min }) => {
        const location = useLocation<Location>();

        return (
            <div className="w-inputWidth">
                <label
                    htmlFor={htmlFor}
                    className="font-bold text-sm cursor-pointer block mb-1"
                >
                    {children}
                    {location.pathname === "/register" && (
                        <span className="ml-1 bg-red-default rounded text-xs text-white-default p-1 font-bold">
                            必須
                        </span>
                    )}
                </label>
                <Input
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    id={htmlFor}
                    min={min}
                />
                {error && error.length > 0 && (
                    <ul className="bg-red-light text-red-dark p-4 mt-2 rounded-md">
                        {error?.map((message, index) => (
                            <li
                                key={index}
                                className="text-indent-em pl-em before:content-['・']"
                            >
                                {message}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
);

FormInput.displayName = "FormInput";
