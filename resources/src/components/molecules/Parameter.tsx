/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useCallback, VFC } from "react";
import { useRecoilValue } from "recoil";

import { Charts } from "@/components/molecules/Charts/Charts";
import { Status } from "@/components/molecules/Status";
import { userState } from "@/components/store/userState";

export const Parameter: VFC = () => {
    const user = useRecoilValue(userState);

    // 分を〇時間〇分に変換する関数
    const timeConvert = useCallback((time: number | null): string => {
        const hours = time! / 60;
        const revertHours = Math.floor(hours);
        const minutes = (hours - revertHours) * 60;
        const revertMinutes = Math.round(minutes);
        return `${revertHours}時間${revertMinutes}分`;
    }, []);

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

    const userData = [
        ...data,
        {
            title: "今までに吸ったタバコの本数",
            value: `${user?.total_cigarettes}本`,
        },
        {
            title: "減少した寿命",
            value: timeConvert(user && user.total_cigarettes * 15),
        },
    ];

    return (
        <div className="flex flex-col sm:flex-row">
            <Charts chartsData={data} userName={user?.name} />
            <Status userData={userData} userName={user?.name} />
        </div>
    );
};
