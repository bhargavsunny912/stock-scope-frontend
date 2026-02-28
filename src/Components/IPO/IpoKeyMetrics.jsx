const IpoKeyMetrics = ({ipo}) => {
  return (
    <div className="p-10 gap-5 flex-col border border-gray-400 rounded-xl w-[30%] flex items-start">
      <h1 className="text-2xl font-semibold">Key Metrics</h1>
      <div className="flex text-lg items-center justify-between w-full">
        <h1>Issue Price</h1>
        <h1 className="font-semibold">₹{ipo?.issue_price??"-"}</h1>
      </div>
      <div className="flex text-lg items-center justify-between w-full">
        <h1>Price Band</h1>
        <h1 className="font-semibold">₹{ipo?.min_price??"-"} - ₹{ipo?.max_price??"-"}</h1>
      </div>
      <div className="flex text-lg items-center justify-between w-full">
        <h1>Lot Size</h1>
        <h1 className="font-semibold">{ipo?.lot_size??"-"} Shares</h1>
      </div>
      <div className="flex text-lg items-center justify-between w-full">
        <h1>Min Investment</h1>
        <h1 className="font-semibold">13,500</h1>
      </div>
    </div>
  );
};

export default IpoKeyMetrics;