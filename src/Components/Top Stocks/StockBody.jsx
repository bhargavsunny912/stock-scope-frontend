import { useEffect, useState } from "react";
import Stocks from "./Stocks";
import { useSelector } from "react-redux";
import StockSkeleton from "../Stock/StockSkeleton";

const StockBody = () => {
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);

  const allStocks = [...topGainers, ...topLosers];
  const type = useSelector((state) => state.TopStocks.value);

  const fetchTopStocks = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/trending`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setTopGainers(data?.trending_stocks.top_gainers || []);
      setTopLosers(data?.trending_stocks.top_losers || []);

    } catch (error) {
      console.error("Error fetching trending stocks:", error);
    }
  };

  useEffect(() => {
    fetchTopStocks();
  }, []);

  const stocksToShow= type === "All"? allStocks: type === "Gainers"? topGainers: topLosers;

  if(stocksToShow.length === 0) {
    return (
      <div className="h-[70vh] overflow-y-scroll scrollHide border border-gray-300 rounded-b-2xl">
        <StockSkeleton />
      </div>
    );
  }

  return (
  <div className="h-[70vh] overflow-y-scroll scrollHide border border-gray-300 rounded-b-2xl">
    {stocksToShow?.map((d, index) => (
      <Stocks key={index} data={d} />
    ))}
  </div>
);

};

export default StockBody;

