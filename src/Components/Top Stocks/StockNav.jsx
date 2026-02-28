import { useDispatch } from "react-redux";
import { Change } from "../../Redux/TopStocksSlice";
import UseColorGenerator from "../../Custom Hooks/UseColorGenerator";

const StockNav=()=>{

    const dispatch=useDispatch();

    const handleStocks=(value)=>{
        dispatch(Change(value));
    }

    const {random1,random2,random3}=UseColorGenerator();

    return (
        <div className="flex justify-between items-center my-5 mx-2">
            <h1 style={{backgroundColor:`rgb(${random1},${random2},${random3})`}} className="font-bold px-4 py-2 rounded-xl text-white text-2xl">Top Stocks</h1>
            <div className="flex gap-5 items-center">
                <button onClick={()=>handleStocks("All")} className="transition-transform duration-200 hover:scale-[1.1] active:scale-[0.9] py-2 px-4 rounded-xl border border-gray-400 hover:bg-gray-200 focus:text-white focus:bg-blue-500">All</button>
                <button onClick={()=>handleStocks("Gainers")} className="transition-transform duration-200 hover:scale-[1.1] active:scale-[0.9] py-2 px-4 rounded-xl border border-gray-400 hover:bg-gray-200 focus:text-white focus:bg-blue-500">Gainers</button>
                <button onClick={()=>handleStocks("Losers")} className="transition-transform duration-200 hover:scale-[1.1] active:scale-[0.9] py-2 px-4 rounded-xl border border-gray-400 hover:bg-gray-200 focus:text-white focus:bg-blue-500">Losers</button>
            </div>
        </div>
    );
}
export default StockNav;