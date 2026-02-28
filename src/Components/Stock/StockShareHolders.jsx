const StockShareHolders=({data})=>{
    return (
        <div className="border p-10 border-gray-400 rounded-xl flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">Major Shareholders</h1>
                    <div className="bg-gray-100 py-3 px-5 rounded-xl flex items-center justify-between">
                        <div className="flex items-center justify-start gap-5">
                            <h1 className="text-xl bg-blue-500 rounded-xl px-4 py-2 text-white">P</h1>
                            <div className="flex flex-col text-lg">
                                <h1 className="font-semibold">Promoter Group</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">{data?.[0]?.categories?.[0]?.percentage}%</h1>
                        </div>
                    </div>
                    <div className="bg-gray-100 py-3 px-5 rounded-xl flex items-center justify-between">
                        <div className="flex items-center justify-start gap-5">
                            <h1 className="text-xl bg-green-500 rounded-xl px-4 py-2 text-white">F</h1>
                            <div className="flex flex-col text-lg">
                                <h1 className="font-semibold">Foreign Institutional Investors</h1>
                                <h1 className="text-gray-600">Multiple FIIs</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">{data?.[1]?.categories?.[1]?.percentage}%</h1>
                        </div>
                    </div>
                    <div className="bg-gray-100 py-3 px-5 rounded-xl flex items-center justify-between">
                        <div className="flex items-center justify-start gap-5">
                            <h1 className="text-xl bg-blue-500 rounded-xl px-4 py-2 text-white">D</h1>
                            <div className="flex flex-col text-lg">
                                <h1 className="font-semibold">Domestic Institutional Investors</h1>
                                <h1 className="text-gray-600">Mutual Funds, Banks, etc.</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">{data?.[2]?.categories?.[2]?.percentage}%</h1>
                        </div>
                    </div>
                    <div className="bg-gray-100 py-3 px-5 rounded-xl flex items-center justify-between">
                        <div className="flex items-center justify-start gap-5">
                            <h1 className="text-xl bg-blue-500 rounded-xl px-4 py-2 text-white">R</h1>
                            <div className="flex flex-col text-lg">
                                <h1 className="font-semibold">Retail & Others</h1>
                                <h1 className="text-gray-600">Individual Investors</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">{data?.[3]?.categories?.[3]?.percentage}%</h1>
                        </div>
                    </div>
                </div>
    );
}
export default StockShareHolders;