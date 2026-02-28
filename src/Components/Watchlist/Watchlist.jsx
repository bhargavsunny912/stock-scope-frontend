import { useSelector } from "react-redux";
import Stocks from "../Top Stocks/Stocks";
import Ipo from "../IPO's/Ipo";
import Mutualfund from "../MutualFunds/Mutualfund";
import UseColorGenerator from "../../Custom Hooks/UseColorGenerator";
import StockHead from "../Top Stocks/StockHead";
import Stocks1 from "../AllStocks/Stocks1";
import SectionAnimation from "../SectionAnimation/SectionAnimation";

const Watchlist = () => {

    const stocks=useSelector((state)=>state.WatchlistStocks.value);
    const stocks1=useSelector((state)=>state.WatchlistStocks1.value);
    const Ipos=useSelector((state)=>state.WatchlistIpos.value);
    const funds=useSelector((state)=>state.WatchlistFunds.value);

    const {random1,random2,random3}=UseColorGenerator();

    if(stocks.length===0 && Ipos.length===0 && funds.length===0){
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <div className="text-3xl font-semibold text-blue-500 bg-gray-300 p-5 rounded-xl">Watchlist Is Empty</div>
            </div>
        );
    }
  return (
    <div className="flex flex-col gap-10 w-[90%] mx-auto my-10">
        <SectionAnimation>
        {stocks.length>0 && <div style={{backgroundColor:`rgb(${random1},${random2},${random3})`}} className="mb-5 text-3xl font-semibold rounded-xl text-white py-2 px-4 w-fit">Watchlisted Stocks</div>}
        {stocks.length>0 && 
            <div>
                <StockHead />
                <div className="h-[70vh] flex flex-col items-center scrollHide overflow-y-scroll rounded-b-2xl border border-gray-300">
                    {stocks?.map((d, index) => (
                        <Stocks key={index} data={d} />
                    ))}
                    {stocks1?.map((d, index) => (
                        <Stocks1 key={index} data={d} />
                    ))}
                </div>
            </div>
        }
        </SectionAnimation>
        <SectionAnimation>
        {funds.length>0 && <div style={{backgroundColor:`rgb(${random1},${random2},${random3})`}} className="mb-5 text-3xl font-semibold rounded-xl text-white py-2 px-4 w-fit">Watchlisted Mutual Funds</div>}
        {funds.length>0 && <div className="h-[70vh] flex items-center gap-5 px-10 scrollHide overflow-x-scroll rounded-2xl border border-gray-300">
            {funds?.map((d, index) => (
                <Mutualfund key={index} mf={d} />
            ))}
        </div>}
        </SectionAnimation>
        <SectionAnimation>
            {Ipos.length>0 && <div style={{backgroundColor:`rgb(${random1},${random2},${random3})`}} className="mb-5 text-3xl font-semibold rounded-xl text-white py-2 px-4 w-fit">Watchlisted Ipos</div>}
            {Ipos.length>0 && <div className="h-[70vh] flex items-center gap-5 px-10 scrollHide overflow-x-scroll rounded-2xl border border-gray-300">
                {Ipos?.map((d, index) => (
                    <Ipo key={index} Ipo={d} />
                ))}
            </div>}
        </SectionAnimation>
    </div>
  );
};

export default Watchlist;