import React from "react";
import { weatherIcons } from "../../const/icons";
import { ChartData } from "../../../Dashboard/model/types/chart";

interface CustomizedLabelProps {
    x?: number;
    y?: number;
    stroke?: string;
    value?: string | number;
    payload?: ChartData;
}

export const CustomizedLabel: React.FC<CustomizedLabelProps> = ({ x = 0, y = 0, stroke = "#000", value, payload }) => {
    const IconComponent = payload?.weather_icon && weatherIcons[payload.weather_icon as keyof typeof weatherIcons] 
    ? weatherIcons[payload.weather_icon as keyof typeof weatherIcons] 
    : <text x={-5} y={-20} fill="red">❓</text>;

  return (
    <g transform={`translate(${x - 10}, ${y - 6})`} textAnchor="middle">
        <rect
            x={-14}
            y={-30}
            width={60}
            height={30}
            rx={16}
            ry={16}
            fill="#f1f1f1"
        />
        {IconComponent}
        <text x={26} y={-13} fill={stroke} fontSize={15} dy={4}>
            {value}°
        </text>
    </g>
  );
};
