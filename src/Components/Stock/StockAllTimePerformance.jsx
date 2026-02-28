const StockAllTimePerformance=({data})=>{
    return (
        <div className="border p-10 border-gray-400 rounded-xl flex flex-col gap-5 w-[48%]">
            <h1 className="text-3xl font-bold">All-Time Performance</h1>
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600">All-Time High</h1>
                <h1 className="font-semibold text-lg">₹{data?.stockDetailsReusableData?.high}</h1>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600">All-Time Low</h1>
                <h1 className="font-semibold text-lg">₹{data?.stockDetailsReusableData?.low}</h1>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600">52 Week High</h1>
                <h1 className="font-semibold text-lg">₹{data?.yearHigh}</h1>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600">52 Week Low</h1>
                <h1 className="font-semibold text-lg">₹{data?.yearLow}</h1>
            </div>
        </div>
    );
}
export default StockAllTimePerformance;