/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useCallback, VFC } from "react";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { useRecoilValue } from "recoil";

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

    // 健康値/脳値/メンタル値の数値によってチャートに表示する色を変える関数
    const changeColor = useCallback((data: (number | undefined)[]): string => {
        if (data.every((val) => val! > 50)) {
            return "#6EE7B7";
        } else if (data.some((val) => val! < 50 && val! > 30)) {
            return "#FFF100";
        } else {
            return "#FF000D";
        }
    }, []);

    return (
        <ResponsiveContainer width={"100%"} height={400}>
            <RadarChart outerRadius={"90%"} data={data} margin={{ bottom: 60 }}>
                <Legend verticalAlign={"top"} height={36} />
                <Tooltip />
                <PolarGrid />
                <PolarAngleAxis dataKey="title" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                    name={`${user?.name}さん`}
                    dataKey="value"
                    stroke={changeColor(data.map((val) => val.value))}
                    fill={changeColor(data.map((val) => val.value))}
                    fillOpacity={0.6}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};
