const StockSkeleton=()=>{
    return (
        <div className="flex flex-col gap-1">
            <div className="animate-pulse h-18 bg-gray-300 rounded w-full"></div>
            <div className="animate-pulse h-18 bg-gray-300 rounded w-full"></div>
            <div className="animate-pulse h-18 bg-gray-300 rounded w-full"></div>
            <div className="animate-pulse h-18 bg-gray-300 rounded w-full"></div>
            <div className="animate-pulse h-18 bg-gray-300 rounded w-full"></div>
        </div>
    );
}
export default StockSkeleton;