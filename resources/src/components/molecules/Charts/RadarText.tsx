import React, { VFC } from "react";
import { Text } from "recharts";

type LabelType = {
    value: number;
    x: number;
    y: number;
};

export const RadarText: VFC<LabelType> = ({ value, x, y }) => {
    return (
        <>
            <Text x={x} y={y} dominantBaseline="hanging" fill="#333">
                {value}
            </Text>
        </>
    );
};
