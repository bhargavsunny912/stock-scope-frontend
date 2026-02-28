const IpoDates = ({ipo}) => {
  return (
    <div className="p-10 gap-5 flex-col border border-gray-400 rounded-xl w-[30%] flex items-start">
      <h1 className="text-2xl font-semibold">Important Dates</h1>
      <div className="flex text-lg items-center justify-between w-full">
        <h1>IPO Open Date</h1>
        <h1 className="font-semibold">{ipo?.bidding_start_date??"-"}</h1>
      </div>
      <div className="flex text-lg items-center justify-between w-full">
        <h1>IPO Close Date</h1>
        <h1 className="font-semibold">{ipo?.bidding_end_date??"-"}</h1>
      </div>
      <div className="flex text-lg items-center justify-between w-full">
        <h1>Allotment Date</h1>
        <h1 className="font-semibold">{ipo?.bidding_start_date??"-"}</h1>
      </div>
      <div className="flex text-lg items-center justify-between w-full">
        <h1>Listing Date</h1>
        <h1 className="font-semibold">{ipo?.listing_date??"-"}</h1>
      </div>
    </div>
  );
};

export default IpoDates;