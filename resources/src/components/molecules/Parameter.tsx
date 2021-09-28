import React, { VFC } from "react";
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        value: "健康値",
        A: 100,
        fullMark: 100,
    },
    {
        value: "メンタル値",
        A: 98,
        fullMark: 100,
    },
    {
        value: "脳値",
        A: 86,
        fullMark: 100,
    },
];

export const Parameter: VFC = () => {
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <RadarChart outerRadius={90} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="value" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                    name="Lily"
                    dataKey="A"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};
