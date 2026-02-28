const StockKeyStats=({data})=>{
    return (
        <div className="rounded-xl flex w-[90%] flex-col gap-5 items-start justify-center py-5 px-10 bg-green-100">
            <h1 className="font-bold text-2xl">Key Statistics</h1>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-gray-700 font-semibold">High</h1>
                <h1 className="text-green-500 font-bold">₹{data?.stockDetailsReusableData?.high}</h1>
            </div>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-gray-700 font-semibold">Low</h1>
                <h1 className="text-red-500 font-bold">₹{data?.stockDetailsReusableData?.low}</h1>
            </div>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-gray-700 font-semibold">Prev. Close</h1>
                <h1 className="font-bold">₹{data?.stockDetailsReusableData?.close}</h1>
            </div>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-gray-700 font-semibold">Market Cap</h1>
                <h1 className="font-bold">{data?.stockDetailsReusableData?.marketCap}M</h1>
            </div>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-gray-700 font-semibold">Mutual Fund % </h1>
                <h1 className="font-bold">{data?.stockDetailsReusableData?.mutualFundShareHolding?.percentage}%</h1>
            </div>
        </div>
    );
}
export default StockKeyStats;