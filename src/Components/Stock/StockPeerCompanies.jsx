const StockCompanyHistory = ({ data }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-8 bg-white shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Peer Companies</h1>

      <div className="flex flex-col gap-4">
        {data?.map((d, index) => {
          const isPositive = Number(d?.netChange) >= 0;
          return (
            <div key={index} className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center bg-gray-100 px-8 py-4 rounded-xl text-lg">
              <h1 className="font-semibold text-gray-700">{d?.companyName}</h1>
              <h1 className="text-gray-700">₹{d?.price}</h1>
              <h1 className={`font-medium ${isPositive ? "text-green-600" : "text-red-500"}`}>{d?.netChange}%</h1>
              <h1 className="text-gray-700 text-right">{d?.marketCap}M</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockCompanyHistory;
