import React, { VFC } from "react";

import { Input } from "@/components/atoms/inputs/Input";

type LoginFormProps = {
    htmlFor: string;
    placeholder: string;
    id: string;
    children: string;
};

export const LoginFormInput: VFC<LoginFormProps> = ({
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
