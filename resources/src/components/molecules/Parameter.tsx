import React, { VFC } from "react";
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
                    stroke="#6EE7B7"
                    fill="#6EE7B7"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};
