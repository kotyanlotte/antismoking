import React, { VFC } from "react";

import { CigarettesForm } from "@/components/molecules/forms/CigarettesForm";

export const CigarettesArea: VFC = () => {
    return (
        <div className="p-10">
            <h2 className="font-bold text-xl mb-5 surface:text-center">
                吸ったタバコの本数を入力してください。
            </h2>
            <CigarettesForm />
        </div>
    );
};
