import StockKeyStats from "./StockKeyStats";
import StockPrice from "./StockPrice";
import StockTradingSignal from "./StockTradingSignal";
import StockGraphDays from "./StockGraphDays";
import Graph from "./Graph";

const StockGraphContainer = ({ data }) => {

    const Symbol = data?.companyProfile?.exchangeCodeNse;

    return (
        <div className="flex mb-15 justify-around">
            <div className="flex flex-col gap-10 items-start w-[65%]">
                <StockPrice data={data}/>
                <Graph symbol={Symbol} /> 
                <StockGraphDays />
            </div>
            <div className="flex flex-col items-end gap-10 w-[35%]">
                <StockKeyStats data={data} /> 
                <StockTradingSignal data={data} />
            </div>
        </div>
    );
}

export default StockGraphContainer;
