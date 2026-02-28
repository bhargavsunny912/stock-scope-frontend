import { useSelector } from "react-redux";

const StockPrice=({data})=>{

    const price=data?.stockDetailsReusableData?.price;
    const perChange=data?.percentChange;
    const change=((perChange*price)/100).toFixed(2);

    const updatedPrice=(useSelector((state)=>state.PriceUpdate.value.latestPrice)).toFixed(2);
    const closeRate=data?.stockDetailsReusableData?.close;
    const CurrentChange=(updatedPrice?updatedPrice-closeRate:change).toFixed(2);
    const CurrentPerChange=updatedPrice?((CurrentChange/closeRate)*100).toFixed(2):perChange;
    
    return (
        <div className="flex items-end justify-start gap-5">
            <h1 className="text-5xl font-bold">₹{updatedPrice>1?updatedPrice:price}</h1>
            <h1 className={`${(updatedPrice>1?CurrentChange:perChange)>=0?"text-green-700 transition-all duration-300":"text-red-700 transition-all duration-300"} text-2xl font-semibold`}>{(updatedPrice>1?CurrentChange:perChange)>=0?"+":""}{(updatedPrice>1?CurrentChange:perChange)}</h1>
            <h1 className={`${(updatedPrice>1?CurrentPerChange:perChange)>=0?"bg-green-100 text-green-700 transition-all duration-300":"bg-red-100 text-red-700 transition-all duration-300"} text-lg font-semibold  px-2 py-1 rounded-lg`}>{(updatedPrice>1?CurrentPerChange:perChange)>=0?"+":""}{(updatedPrice>1?CurrentPerChange:perChange)}%</h1>
        </div>
    );
}
export default StockPrice;