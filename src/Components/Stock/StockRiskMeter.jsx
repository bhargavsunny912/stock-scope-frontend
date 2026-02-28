import { Gauge } from "@mui/x-charts/Gauge";

const getColor = (value) => {
  if (value < 35) return "#22c55e";   // green
  if (value < 70) return "#facc15";   // yellow
  return "#ef4444";                   // red
};

export default function RiskMeter({ riskValue }) {
  return (
    <Gauge
      value={riskValue}
      startAngle={-90}
      endAngle={90}
      width={220}
      height={140}
      cornerRadius="50%"
      sx={{
        "& .MuiGauge-valueArc": {
          fill: getColor(riskValue),
        },
        "& .MuiGauge-referenceArc": {
          fill: "#e5e7eb",
        },
        "& .MuiGauge-valueText": {
          fontSize: "18px",
          fontWeight: "bold",
        },
      }}
      text={({ value }) => `${value}% Risk`}
    />
  );
}
