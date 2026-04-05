import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createChart,LineSeries,CandlestickSeries,} from "lightweight-charts";
import socket from "../../socket";
import "../../App.css";
import { updatePrice } from "../../Redux/PriceUpdate";

const Graph = ({ symbol }) => {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);
  const lastTimeRef = useRef(0);

  const isCandle = useSelector((state) => state.CandleStatus.value);
  const duration = useSelector((state) => state.Duration.value);
  const theme = useSelector((state) => state.Theme.value);

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [isMarketOpen, setIsMarketOpen] = useState(false);

  /* =========================
      NSE MARKET STATUS (IST)
  ========================= */
  useEffect(() => {
    const checkMarketStatus = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      );

      const day = now.getDay();
      const minutes = now.getHours() * 60 + now.getMinutes();

      const isWeekday = day >= 1 && day <= 5;
      const isTimeOpen = minutes >= 555 && minutes <= 930;

      setIsMarketOpen(isWeekday && isTimeOpen);
    };

    checkMarketStatus();
    const interval = setInterval(checkMarketStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  /* =========================
      NSE SESSION FILTER (IST)
  ========================= */
  const isMarketTime = (unix) => {
    const ist = new Date(
      new Date(unix * 1000).toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })
    );
    const minutes = ist.getHours() * 60 + ist.getMinutes();
    return minutes >= 555 && minutes <= 930;
  };

  /* =========================
      FETCH HISTORICAL DATA
  ========================= */
  useEffect(() => {
    if (!symbol || !duration) return;

    const [range, interval] = duration.split("-");

    fetch(`${import.meta.env.VITE_API_URL}/api/chart?symbol=${symbol}.NS&range=${range}&interval=${interval}`)
      .then((res) => res.json())
      .then((res) => {
        const result = res?.chart?.result?.[0];
        if (!result || !result.timestamp) return;

        const quotes = result.indicators.quote[0];

        let formatted = result.timestamp
          .map((t, i) => {
            if (
              quotes.close[i] === null ||
              quotes.close[i] === undefined
            )
              return null;

            if (interval !== "1d" && !isMarketTime(t)) return null;

            return {
              time: t,
              open: quotes.open[i],
              high: quotes.high[i],
              low: quotes.low[i],
              close: quotes.close[i],
            };
          })
          .filter(Boolean);

        const seen = new Set();
        formatted = formatted.filter((d) => {
          if (seen.has(d.time)) return false;
          seen.add(d.time);
          return true;
        });

        formatted.sort((a, b) => a.time - b.time);

        if (formatted.length > 0) {
          lastTimeRef.current = formatted[formatted.length - 1].time;
        }

        setData(formatted);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [symbol, duration]);

  /* =========================
      CREATE CHART (ONLY ONCE)
  ========================= */
  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      width:containerRef.current.clientWidth,
      height: 450,
      layout: {
        background: { color: theme ? "#1E1E1E" : "#FFFFFF" },
        textColor: theme ? "#DDD" : "#222",
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        fixLeftEdge: true,
        fixRightEdge: true,
        rightOffset: 0,
        tickMarkFormatter: (time) => {
          const date = new Date(time * 1000);
          return date.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
          });
        },
      },
    });

    chartRef.current = chart;

    const handleResize = () => {
      chart.applyOptions({
        width: containerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []); // ✅ removed theme dependency

  /* =========================
      THEME UPDATE (NO RECREATE)
  ========================= */
  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.applyOptions({
      layout: {
        background: { color: theme ? "#1E1E1E" : "#FFFFFF" },
        textColor: theme ? "#DDD" : "#222",
      },
      grid: {
        vertLines: { color: theme ? "#2B2B2B" : "#E1E1E1" },
        horzLines: { color: theme ? "#2B2B2B" : "#E1E1E1" },
      },
    });
  }, [theme]);

  /* =========================
      SERIES MANAGEMENT
  ========================= */
  useEffect(() => {
    if (!chartRef.current) return;

    if (seriesRef.current) {
      chartRef.current.removeSeries(seriesRef.current);
    }

    seriesRef.current = isCandle
      ? chartRef.current.addSeries(CandlestickSeries)
      : chartRef.current.addSeries(LineSeries);

    if (data.length) {
      const chartData = isCandle
        ? data
        : data.map((d) => ({ time: d.time, value: d.close }));

      seriesRef.current.setData(chartData);
      chartRef.current.timeScale().fitContent();
    }
  }, [isCandle, data]);

  /* =========================
      LIVE SOCKET (FIXED CLEANUP)
  ========================= */
  useEffect(() => {
    if (!symbol) return;

    socket.emit("subscribe", { symbol: `${symbol}.NS`, duration });

    const handler = (res) => {
      if (!seriesRef.current || !res) return;

      const result = res?.chart?.result?.[0];
      if (!result || !result.timestamp) return;

      const i = result.timestamp.length - 1;
      const t = result.timestamp[i];

      if (t <= lastTimeRef.current) return;
      if (!isMarketTime(t)) return;

      const quotes = result.indicators.quote[0];
      if (quotes.close[i] === null) return;

      const candle = {
        time: t,
        open: quotes.open[i],
        high: quotes.high[i],
        low: quotes.low[i],
        close: quotes.close[i],
      };

      dispatch(updatePrice(candle.close));

      if (isCandle) {
        seriesRef.current.update(candle);
      } else {
        seriesRef.current.update({
          time: t,
          value: candle.close,
        });
      }

      lastTimeRef.current = t;
    };

    socket.on("priceUpdate", handler);

    return () => {
      socket.off("priceUpdate", handler);
    };
  }, [symbol, duration, isCandle]);

  /* =========================
      RENDER
  ========================= */
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className="market-status">
        {isMarketOpen ? (
          <span className="live-blink">
            🔴 LIVE ({symbol})
          </span>
        ) : (
          <span className="market-closed">
            Market Closed
          </span>
        )}
      </div>

      <div
        ref={containerRef}
        className="chart-container"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Graph;