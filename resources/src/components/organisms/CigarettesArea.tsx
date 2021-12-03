import React, { VFC } from "react";

import { CigarettesForm } from "@/components/molecules/forms/CigarettesForm";

export const CigarettesArea: VFC = () => {
    return (
        <div className="p-10">
            <label
                className="font-bold text-xl mb-5 surface:text-center block"
                htmlFor="cigarettes"
            >
                吸ったタバコの本数を入力してください。
            </label>
            <CigarettesForm />
        </div>
    );
};
