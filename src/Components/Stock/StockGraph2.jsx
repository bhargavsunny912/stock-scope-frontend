import { createChart,CandlestickSeries } from "lightweight-charts";
import { useEffect, useRef } from "react";

const CandleChart = ({ data }) => {

  const chartRef = useRef(null);
  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) return;

    const chart = createChart(chartRef.current, {
      width: 750,
      height: 400,
      layout: {
        background: { color: "#222" },
        textColor: "#DDD",
      },
      grid: {
        vertLines: { color: "transparent" },
        horzLines: { color: "transparent" },
      },
    });

    

    const series = chart.addSeries(CandlestickSeries);
    series.setData(data);

    const handleResize = () => {
      chart.applyOptions({
        width: chartRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={chartRef}  style={{ width: "100%", height: "400px" }} />;
};

export default CandleChart;
