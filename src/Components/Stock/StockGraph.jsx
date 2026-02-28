import { useEffect, useRef } from "react";
import { createChart, LineSeries, CandlestickSeries } from "lightweight-charts";
import socket from "../../socket.js";

const Graph = ({ symbol, type = "line" }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);

  useEffect(() => {
    if (!symbol || !chartContainerRef.current) return;

    /* ---------------- CREATE CHART ---------------- */
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: "#0f172a" },
        textColor: "#ffffff",
      },
      grid: {
        vertLines: { color: "#1e293b" },
        horzLines: { color: "#1e293b" },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    /* ---------------- CREATE SERIES ---------------- */
    const series =
      type === "candle"
        ? chart.addSeries(CandlestickSeries)
        : chart.addSeries(LineSeries);

    chartRef.current = chart;
    seriesRef.current = series;

    /* ---------------- RESIZE HANDLER ---------------- */
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    /* ---------------- SOCKET SUBSCRIBE ---------------- */
    socket.emit("subscribe", `${symbol}.NS`);

    socket.on("priceUpdate", (data) => {
      const result = data?.chart?.result?.[0];
      const timestamps = result?.timestamp;
      const quote = result?.indicators?.quote?.[0];

      if (!timestamps || !quote) return;

      const i = timestamps.length - 1;

      // LINE
      if (type === "line") {
        seriesRef.current.update({
          time: timestamps[i],
          value: quote.close[i],
        });
      }

      // CANDLE
      else {
        seriesRef.current.update({
          time: timestamps[i],
          open: quote.open[i],
          high: quote.high[i],
          low: quote.low[i],
          close: quote.close[i],
        });
      }
    });

    /* ---------------- CLEANUP ---------------- */
    return () => {
      socket.off("priceUpdate");
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [symbol, type]);

  return (
    <div
      ref={chartContainerRef}
      style={{ width: "100%", minHeight: "400px" }}
    />
  );
};

export default Graph;
