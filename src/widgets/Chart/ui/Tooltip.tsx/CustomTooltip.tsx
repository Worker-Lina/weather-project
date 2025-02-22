import { TooltipProps } from "recharts";

export const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    const fullData = payload[0]?.payload;  

    return (
        <div style={{
            background: "rgba(0, 0, 0, 0.8)", 
            color: "white", 
            padding: "10px", 
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"
        }}>
            <p style={{ fontWeight: "bold", margin: 0 }}>{label}</p>
            <p style={{ margin: 0 }}>
                <span style={{ color: '#234455', fontWeight: "bold" }}>●</span> Температура: {fullData.temp}°
            </p>
            <p style={{ margin: 0 }}>
                <span style={{ color: '#234455', fontWeight: "bold" }}>●</span> Ощущается как: {fullData.feels_like}°
            </p>
            <p style={{ margin: 0 }}>
                <span style={{ color: '#234455', fontWeight: "bold" }}>●</span> Влажность воздуха: {fullData.humidity}%
            </p>
            <p style={{ margin: 0 }}>
                <span style={{ color: '#234455', fontWeight: "bold" }}>●</span> Давление: {fullData.pressure} мм.
            </p>
            <p style={{ margin: 0 }}>
                <span style={{ color: '#234455', fontWeight: "bold" }}>●</span> Скорость ветра: {fullData.wind_speed} м/с
            </p>
        </div>
    );
};