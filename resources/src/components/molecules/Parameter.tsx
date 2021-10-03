import React, { VFC } from "react";
import { useRecoilValue } from "recoil";

import { Charts } from "@/components/molecules/Charts/Charts";
import { Status } from "@/components/molecules/Status";
import { userState } from "@/components/store/userState";

export const Parameter: VFC = () => {
    const user = useRecoilValue(userState);

    const data = [
        {
            title: "健康値",
            value: user?.health_value,
        },
        {
            title: "メンタル値",
            value: user?.mental_value,
        },
        {
            title: "脳値",
            value: user?.brain_value,
        },
    ];

    const userData = {
        data,
        user: { name: user?.name, cigarettes: user?.total_cigarettes },
    };

    return (
        <>
            <Charts chartsData={data} userName={user?.name} />
            <Status userData={userData} />
        </>
    );
};
