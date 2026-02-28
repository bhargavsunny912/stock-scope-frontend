import { Link } from "react-router-dom";
import { VscGraphLine } from "react-icons/vsc";
import { MdCandlestickChart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { SwitchGraph } from "../../Redux/CandleSlice";
import {ChangeDuration} from "../../Redux/GraphDuration";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { SwitchTheme } from "../../Redux/ChartTheme";


const StockGraphDays=()=>{

    const isCandle=useSelector((state)=>state.CandleStatus.value);  
    const theme=useSelector((state)=>state.Theme.value);

    const dispatch=useDispatch();

    const handleCandle=()=>{
        dispatch(SwitchGraph(!isCandle));
    }

    const handleDuration=(period)=>{
        dispatch(ChangeDuration(period));
    }

    const handleTheme=()=>{
        dispatch(SwitchTheme());
    }

    return (
        <div className="text-center flex items-center justify-center gap-5 w-full">
            <Link onClick={()=>handleDuration("1d-1m")} className="border border-gray-400 p-2 rounded-xl focus:bg-blue-500 focus:text-white">1D</Link>
            <Link onClick={()=>handleDuration("1mo-1d")} className="border border-gray-400 p-2 rounded-xl focus:bg-blue-500 focus:text-white">1M</Link>
            <Link onClick={()=>handleDuration("1y-1d")} className="border border-gray-400 p-2 rounded-xl focus:bg-blue-500 focus:text-white">1Y</Link>
            <Link onClick={()=>handleDuration("max-1d")} className="border border-gray-400 p-2 rounded-xl focus:bg-blue-500 focus:text-white">All</Link>
            <Link  onClick={handleCandle} className="border border-gray-400 p-2 text-2xl rounded-xl focus:bg-blue-500 focus:text-white">{isCandle?<VscGraphLine />:<MdCandlestickChart />}</Link>
            <Link  onClick={handleTheme} className="border border-gray-400 p-2 text-2xl rounded-xl focus:bg-blue-500 focus:text-white">{theme?<MdDarkMode />:<MdLightMode />}</Link>
        </div>
    );
}
export default StockGraphDays;