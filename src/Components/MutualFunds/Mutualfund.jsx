import Rating from '@mui/material/Rating';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleFund } from '../../Redux/WatchlistFunds';

const Mutualfund=({mf,type})=>{

    const dispatch=useDispatch();
    const Mutualfunds=useSelector((state)=>state.WatchlistFunds.value);
    const iswatchlist=Mutualfunds?.find((f)=>f?.fund_name==mf?.fund_name);

    const handlewatchlistfund=()=>{
        dispatch(ToggleFund(mf));
    }

    return (
        <div className="hover:shadow-2xl w-[48%] flex gap-2 flex-col mx-auto border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-xl w-[80%]">{mf?.fund_name}</h1>
                <h1 className="font-bold text-2xl">&#8377;{mf?.latest_nav}</h1>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h1 className="text-gray-600">{type?type:""}</h1>
                </div>
                <h1 className={`${mf?.percentage_change>=0?"text-green-500":"text-red-500"}`}>{mf?.percentage_change>=0?"+":""}{mf?.percentage_change}%</h1>
            </div>
            <div className="text-sm flex justify-start gap-20 my-3 items-center">
                <div className="flex flex-col">
                    <h1 className="text-gray-600">1Y Return</h1>
                    <h1 className={`${mf?.["1_year_return"]>=0?"text-green-500":"text-red-500"}`}>{mf?.["1_year_return"]>=0?"+":"-"}{mf?.["1_year_return"]}%</h1>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-gray-600">3Y Return</h1>
                    <h1 className={`${mf?.["3_year_return"]>=0?"text-green-500":"text-red-500"}`}>{mf?.["3_year_return"]>=0?"+":"-"}{mf?.["3_year_return"]}%</h1>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-gray-600">5Y Return</h1>
                    <h1 className={`${mf?.["5_year_return"]>=0?"text-green-500":"text-red-500"}`}>{mf?.["5_year_return"]>=0?"+":"-"}{mf?.["5_year_return"]??"Null"}%</h1>
                </div>
                <div className="flex justify-end w-[20%] text-3xl transition-transform duration-200 hover:scale-110 active:scale-90">
                    <button onClick={handlewatchlistfund}>{iswatchlist?<FaStar />:<CiStar />}</button>
                </div>
            </div>
            <hr />
            <div className="flex items-center justify-between text-md text-gray-600">
                <h1>Asset Size : <span className='font-bold'>{mf?.asset_size}Cr</span></h1>
                <h1 className='flex items-center'>Rating : <Rating name="read-only" value={mf?.star_rating??4} readOnly /></h1>
            </div>
        </div>
    );
}
export default Mutualfund;