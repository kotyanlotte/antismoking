import React, { VFC } from "react";
import { Text } from "recharts";

type LabelType = {
    value: number;
    x: number;
    y: number;
    name: string;
};

export const RadarText: VFC<LabelType> = ({ value, x, y, name }) => {
    return (
        <>
            <Text
                x={x}
                y={y}
                fill="#333"
                textAnchor="middle"
                fontSize={innerWidth > 350 ? "18px" : "14px"}
            >
                {name}
            </Text>
            <Text
                x={x}
                y={y}
                dominantBaseline="hanging"
                fill="#333"
                textAnchor="middle"
                verticalAnchor="middle"
            >
                {value}
            </Text>
        </>
    );
};
