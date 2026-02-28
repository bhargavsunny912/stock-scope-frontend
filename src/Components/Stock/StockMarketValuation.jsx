const StockMarketValuation=({data})=>{
    return (
        <div className="border p-10 border-gray-400 rounded-xl flex flex-col gap-5 w-[48%]">
            <h1 className="text-3xl font-bold">Market Valuation</h1>
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600">Market Cap</h1>
                <h1 className="font-semibold text-lg">₹{data?.stockDetailsReusableData?.marketCap}</h1>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600">P/E Ratio</h1>
                <h1 className="font-semibold text-lg">{data?.stockDetailsReusableData?.sectorPriceToEarningsValueRatio}</h1>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600">Dividend Yield</h1>
                <h1 className="font-semibold text-lg">{data?.stockDetailsReusableData?.currentDividendYieldCommonStockPrimaryIssueLTM}%</h1>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600">Net Income</h1>
                <h1 className="font-semibold text-lg">₹{data?.stockDetailsReusableData?.NetIncome}</h1>
            </div>
        </div>
    );
}
export default StockMarketValuation;