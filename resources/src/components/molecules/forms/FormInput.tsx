import React, { VFC } from "react";

import { Input } from "@/components/atoms/inputs/Input";

type FormInputProps = {
    htmlFor: string;
    placeholder: string;
    id: string;
    children: string;
};

export const FormInput: VFC<FormInputProps> = ({
    htmlFor,
    placeholder,
    id,
    children,
}) => {
    return (
        <div>
            <label htmlFor={htmlFor} className="font-bold cursor-pointer">
                {children}
            </label>
            <Input placeholder={placeholder} id={id} />
        </div>
    );
};
