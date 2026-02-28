const IpoListing = ({ipo}) => {

  const Gains=ipo?.listing_gains?.toFixed(2);

  return (
    <div className="p-10 bg-green-100 gap-10 flex-col border border-gray-400 rounded-xl w-[30%] flex items-start">
      <h1 className="text-lg font-semibold">Expected Listing Performance</h1>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-6xl font-bold text-green-500">{ipo?.listing_gains>=0?"+":"-"}{Gains}%</h1>
        <h1 className="font-semibold">Estimated Listing Gains</h1>
        <div className="flex items-center justify-between w-full">
            <h1>Expected Listing Price</h1>
            <h1 className="font-semibold">₹{ipo?.listing_price??"-"}</h1>
        </div>
      </div>
    </div>
  );
};

export default IpoListing;