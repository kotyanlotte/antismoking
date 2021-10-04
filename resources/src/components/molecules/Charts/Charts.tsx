/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { memo, useCallback, VFC } from "react";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";

import { RadarText } from "@/components/molecules/Charts/RadarText";
import { ChartsType } from "@/components/types/chartsType";

type DataType = {
    chartsData: ChartsType[];
    userName: string | undefined;
};

export const Charts: VFC<DataType> = memo(({ chartsData, userName }) => {
    // 健康値/脳値/メンタル値の数値によってチャートに表示する色を変える関数
    const changeColor = useCallback((data: (number | undefined)[]): string => {
        if (data.every((val) => val! > 50)) {
            return "#6EE7B7";
        } else if (data.some((val) => val! < 20)) {
            return "#FF000D";
        } else {
            return "#FFF100";
        }
    }, []);

    return (
        <ResponsiveContainer
            height={400}
            width={innerWidth > 640 ? "50%" : "100%"}
        >
            <RadarChart
                outerRadius={"90%"}
                data={chartsData}
                margin={{ bottom: 60 }}
            >
                <Legend verticalAlign={"top"} height={36} />
                <PolarGrid />
                <PolarAngleAxis dataKey="title" tick={false} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                    name={`${userName}さん`}
                    dataKey="value"
                    stroke={changeColor(chartsData.map((val) => val.value))}
                    fill={changeColor(chartsData.map((val) => val.value))}
                    fillOpacity={0.6}
                    label={RadarText}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
});

Charts.displayName = "Charts";
