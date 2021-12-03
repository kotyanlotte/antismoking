import React, { memo, VFC } from "react";

type NumericInputProps = {
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
};

export const NumericInput: VFC<NumericInputProps> = memo(
    ({ onInput, value }) => {
        return (
            <input
                type="text"
                className="max-w-sm input"
                inputMode="numeric"
                onInput={onInput}
                value={value}
            />
        );
    }
);

NumericInput.displayName = "NumericInput";
