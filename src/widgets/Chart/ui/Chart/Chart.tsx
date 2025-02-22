import { memo } from 'react';
import styled from 'styled-components';
import { ChartData } from '../../../Dashboard/model/types/chart';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { CustomTooltip } from '../Tooltip.tsx/CustomTooltip';
import { CustomizedLabel } from '../Label/CustomizedLabel';
import { useSelector } from 'react-redux';
import { getWeatherType } from '../../../../entities/Weather/model/selectors/weatherSelectors';

interface ChartProps {
    data: ChartData[];
}

const ChartContainer = styled.div`
    width: 100%;
    height: 400px;
`

export const Chart = memo(({ data }: ChartProps) => {
    const selectType = useSelector(getWeatherType);
    return (
        <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    width={730} 
                    height={250} 
                    data={data}
                    margin={{ top: 40, right: 40, left: 40, bottom: 40 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date"
                        interval={0}
                        tick={{ fontSize: 14, fill: "#fff", fontWeight: "bold" }} 
                    />
                    <Tooltip content={<CustomTooltip />}/>
                    <Line type="monotone" dataKey={selectType} stroke="#15303f" strokeWidth={3}
                        label={({ x, y, value, index }) => (
                            <CustomizedLabel x={x} y={y} value={value} payload={data[index]} />
                        )}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
});