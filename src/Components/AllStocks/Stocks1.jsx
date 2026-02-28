import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UseColorGenerator from "../../Custom Hooks/UseColorGenerator";
import { ToggleStock1 } from "../../Redux/WatchlistStocks1";

const Stocks1=({data})=>{

    // const dispatch=useDispatch();

    const watchListStocks=useSelector((state)=>state.WatchlistStocks1.value);

    const isWatchlisted=watchListStocks?.some((f)=>f?.ticker===data?.ticker);

    // const handleWatchList=()=>{
    //     dispatch(ToggleStock1(data));
    // }

    const tickerCode=data?.ric?.split(".")?.[0];
    const Letter=data?.company?.[0];

    const {random1,random2,random3}=UseColorGenerator();

    return (
        <div className="hover:bg-gray-200 py-4 px-5 flex items-center gap-7 justify-evenly w-full border border-t-0 border-l-0 border-r-0 border-b-gray-300 ">
            <div className="flex-5 flex items-center gap-5">
                <h1 style={{backgroundColor:`rgb(${random1},${random2},${random3})`}} className="py-2 px-4 rounded-lg text-white">{Letter}</h1>
                <div>
                    <h1 className="font-bold">{data?.company}</h1>
                    <h1 className="text-gray-500 text-sm">{tickerCode}</h1>
                </div>
            </div>
            <h1 className="flex-2 font-bold">&#x20B9;{data?.price}</h1>
            <h1 className={`flex-2 ${data?.net_change>=0?"text-green-500":"text-red-500"}`}>{data?.net_change>=0?"+":""}{data?.net_change}</h1>
            <h1 className={`flex-1 ${data?.percent_change>=0?"text-green-700 bg-green-200":"text-red-700 bg-red-200"} flex items-center justify-center px-2 text-center rounded-2xl`}>{data?.percent_change>=0?"+":""}{data?.percent_change}%</h1>
            <h1 className="flex-2">{data?.volume}</h1>
            <h1 className="flex-2 text-3xl transition-transform duration-200 hover:scale-110 active:scale-90" >{isWatchlisted?<FaStar />:<CiStar />}</h1>
            <Link to={`/Stocks/${data?.company}`} className="flex-2 bg-blue-600 text-white p-2 rounded-xl transition-transform duration-200 hover:scale-[1.1] active:scale-[0.90] text-center">View Details</Link>
        </div>
    );
}
export default Stocks1;