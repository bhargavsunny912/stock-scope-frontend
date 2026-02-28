import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToggleIpo } from "../../Redux/WatchlistIpos";
import UseColorGenerator from "../../Custom Hooks/UseColorGenerator";

const Ipo = ({Ipo,type}) => {

    const dispatch=useDispatch();

    const Ipos=useSelector((state)=>state.WatchlistIpos.value);
    const isWatchlisted=Ipos?.find((f)=>f.symbol==Ipo.symbol);

    const handleIpoWatchlist=()=>{
        dispatch(ToggleIpo(Ipo));
    }

    const {random1,random2,random3}=UseColorGenerator();

    return (
        <div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl p-5 shrink-0 w-[30%] border border-gray-400 flex flex-col justify-center">
            <div className="flex justify-between items-center">
                <h1 style={{backgroundColor:`rgb(${random1},${random2},${random3})`}} className="font-bold text-xl flex justify-center items-center h-15 w-15 text-white rounded-xl">{Ipo?.name?.[0]??"A"}</h1>
                <div className="flex items-center gap-5 justify-end">
                    <h1 className="py-1 px-4 text-white rounded-xl bg-blue-500">{type??"Active"}</h1>
                <button onClick={handleIpoWatchlist} className="text-3xl transition-transform duration-200 hover:scale-110 active:scale-90">{isWatchlisted?<FaStar />:<CiStar />}</button>
                </div>
            </div>
            <h1 className="font-bold text-xl my-5">{Ipo?.name}</h1>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h1 className="text-gray-500">PriceBandRange</h1>
                    <h1 className="font-semibold">₹{Ipo?.min_price??"-"} - ₹{Ipo?.max_price??"-"}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">OpenDate</h1>
                    <h1 className="font-semibold">{Ipo?.bidding_start_date??"-"}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">CloseDate</h1>
                    <h1 className="font-semibold">{Ipo?.bidding_end_date??"-"}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-gray-500">LotSize</h1>
                    <h1 className="font-semibold">{Ipo?.lot_size??"-"} Shares</h1>
                </div>
            </div>
            <Link to={`/IPOS/${Ipo?.symbol}/${type}`} className="mt-5 transition-transform duration-200 hover:scale-[1.1] active:scale-[0.90] text-center w-full py-2 text-white rounded-xl bg-blue-500">View Details</Link>
        </div>
    );
}
export default Ipo;