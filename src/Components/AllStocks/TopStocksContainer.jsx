import Stocks from "../Top Stocks/Stocks";
import Stocks1 from "./Stocks1";
import UseColorGenerator from "../../Custom Hooks/UseColorGenerator";
import UseFetchApi from "../../Custom Hooks/UseFetchApi";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import StockHead from "../Top Stocks/StockHead";
import StockHeader from "./StockHeader";
import StockSkeleton from "../Stock/StockSkeleton";
import SectionAnimation from "../SectionAnimation/SectionAnimation";

const TopStocksContainer = () => {

  const { random1, random2, random3 } = UseColorGenerator();

  const location=useLocation();
  const scrollRefgainer=useRef(null);
  const scrollRefloser=useRef(null);

  const {data: data1,loading: loading1,error: error1} = UseFetchApi(`${import.meta.env.VITE_API_URL}/api/trending`);

  const {data: Nse,loading: loadingNse,error: errorNse} = UseFetchApi(`${import.meta.env.VITE_API_URL}/api/nse`);

  const {data: Bse,loading: loadingBse,error: errorBse} = UseFetchApi(`${import.meta.env.VITE_API_URL}/api/bse`);

  useEffect(()=>{

    if (loading1 || loadingNse || loadingBse) return;

    const hash = location.hash;
    if (hash === "#TopGainers") {
      scrollRefgainer.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (hash === "#TopLosers") {
      scrollRefloser.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  },[ location.hash, loading1, loadingNse, loadingBse]);


  if (error1 || errorNse || errorBse || loading1 || loadingNse || loadingBse) {
    return (
      <div className="w-[95%] mx-auto flex flex-col gap-5 my-10">
        <div style={{ backgroundColor: `rgb(${random1},${random2},${random3})` }} className="text-3xl font-semibold rounded-xl text-white px-4 py-2 w-fit">Top Gainers</div>
        <div>
        <StockHead />
        <div className="h-[70vh] scrollHide overflow-y-scroll rounded-b-2xl border border-gray-300">
          <StockSkeleton />
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 w-[97%] mx-auto my-10">

    <SectionAnimation>
      <div ref={scrollRefgainer} style={{ backgroundColor: `rgb(${random1},${random2},${random3})` }}
           className="mb-5 text-3xl font-semibold rounded-xl text-white px-4 py-2 w-fit">
        Top Gainers
      </div>

      <div>
        <StockHead />
        <div className="h-[70vh] scrollHide overflow-y-scroll rounded-b-2xl border border-gray-300">
          {data1?.trending_stocks?.top_gainers?.map((d, i) => (
            <Stocks key={i} data={d} />
          ))}
        </div>
      </div>
    </SectionAnimation>
    
    <SectionAnimation>
      <div ref={scrollRefloser} style={{ backgroundColor: `rgb(${random1},${random2},${random3})` }}
           className="mb-5 text-3xl font-semibold rounded-xl text-white px-4 py-2 w-fit">
        Top Losers
      </div>

      <div>
        <StockHead />
        <div className="h-[70vh] scrollHide overflow-y-scroll rounded-b-2xl border border-gray-300">
          {data1?.trending_stocks?.top_losers?.map((d, i) => (
            <Stocks key={i} data={d} />
          ))}
        </div>
      </div>
    </SectionAnimation>
    
    <SectionAnimation>
      <div style={{ backgroundColor: `rgb(${random1},${random2},${random3})` }}
           className="mb-5 text-3xl font-semibold rounded-xl text-white px-4 py-2 w-fit">
        Top NSE Active Stocks
      </div>

      <div>
        <StockHeader />
        <div className="h-[70vh] scrollHide overflow-y-scroll rounded-b-2xl border border-gray-300">
          {Nse?.map((d, i) => (
            <Stocks1 key={i} data={d} />
          ))}
        </div>
      </div>
    </SectionAnimation>
    
    <SectionAnimation>
      <div style={{ backgroundColor: `rgb(${random1},${random2},${random3})` }}
           className="mb-5 text-3xl font-semibold rounded-xl text-white px-4 py-2 w-fit">
        Top BSE Active Stocks
      </div>

      <div>
        <StockHeader />
        <div className="h-[70vh] scrollHide overflow-y-scroll rounded-b-2xl border border-gray-300">
          {Bse?.map((d, i) => (
            <Stocks1 key={i} data={d} />
          ))}
        </div>
      </div>
    </SectionAnimation>

    </div>
  );
};

export default TopStocksContainer;
