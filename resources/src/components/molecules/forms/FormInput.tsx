import React, { memo, VFC } from "react";
import { useLocation } from "react-router-dom";

import { Input } from "@/components/atoms/inputs/Input";
import { LocationType } from "@/components/types";

type FormInputProps = {
    htmlFor: string;
    type?: string;
    placeholder: string;
    id: string;
    name?: string;
    children: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string[];
};

export const FormInput: VFC<FormInputProps> = memo(
    ({
        htmlFor,
        placeholder,
        id,
        type,
        name,
        children,
        value,
        onChange,
        error,
    }) => {
        const location = useLocation<LocationType>();

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
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {error?.map((message, index) => (
                    <ul
                        key={index}
                        className="bg-red-light text-red-dark p-4 mt-2 rounded-md"
                    >
                        <li className="indent-sm pl-em before:content-['・']">
                            {message}
                        </li>
                    </ul>
                ))}
            </div>
        );
    }
);

FormInput.displayName = "FormInput";
