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

const data = [
    {
        title: "健康値",
        value: 100,
    },
    {
        title: "メンタル値",
        value: 98,
    },
    {
        title: "脳値",
        value: 86,
    },
];

export const Parameter: VFC = () => {
    return (
        <ResponsiveContainer width={"100%"} height={400}>
            <RadarChart outerRadius={"90%"} data={data} margin={{ bottom: 60 }}>
                <Legend verticalAlign={"top"} height={36} />
                <Tooltip />
                <PolarGrid />
                <PolarAngleAxis dataKey="title" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                    name="Lily"
                    dataKey="value"
                    stroke="#6EE7B7"
                    fill="#6EE7B7"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};
