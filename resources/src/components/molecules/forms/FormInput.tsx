import React, { memo, VFC } from "react";
import { useLocation } from "react-router-dom";

import { Input } from "@/components/atoms/inputs/Input";
import { LocationType } from "@/components/types";

type FormInputProps = {
    htmlFor: string;
    placeholder: string;
    id: string;
    children: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput: VFC<FormInputProps> = memo(
    ({ htmlFor, placeholder, id, children, value, onChange }) => {
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
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }
);

FormInput.displayName = "FormInput";
