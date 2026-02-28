import { FaArrowDown, FaArrowUp, FaHandHoldingUsd } from "react-icons/fa";

const StockTradingSignal=({data})=>{

    const signal = data?.stockDetailsReusableData?.averageRating;

    return (
        <div className="w-[90%] p-5 border border-gray-400 rounded-xl gap-5 flex flex-col items-start">
            <h1 className="font-semibold text-2xl">Trading Signals</h1>
            <div className={`flex text-xl w-full items-center rounded-xl py-2 ${signal==="Buy"||signal=="Strong Buy"?"bg-green-100 text-green-600":signal==="Hold"?"bg-yellow-100 text-yellow-600":"bg-red-100 text-red-600"} font-semibold justify-between px-5`}>
                <h1>{signal}</h1>
                {signal==="Buy"||signal=="Strong Buy"?<FaArrowUp className="text-green-600" />:signal==="Sell"?<FaArrowDown className="text-red-600" />:<FaHandHoldingUsd className="text-yellow-600" />}
            </div>
            <p className="w-full">{signal==="Buy"?"Strong momentum with increasing volume. Technical indicators suggest upward trend continuation.":signal==="Sell"?"Bearish trend detected with decreasing volume. Consider exiting positions.":"Neutral trend with no clear direction. Monitor for potential breakout signals."}</p>
        </div>
    );
}
export default StockTradingSignal;