const StockHeader=()=>{
    return (
        <div
      className="grid grid-cols-[6fr_3fr_2.5fr_2.5fr_2fr_4fr_2fr] px-5 py-4 items-center w-full border border-gray-300 rounded-t-2xl font-semibold text-gray-800 bg-gray-100">
      <h1>Company</h1>
      <h1>Price</h1>
      <h1>Change</h1>
      <h1>% Change</h1>
      <h1>Volume</h1>
      <h1 className="text-center">Watchlist</h1>
      <h1 className="text-center">Action</h1>
    </div>
    );
}
export default StockHeader;