import StockHead from "../Stock/StockHead"
import StockAllTimePerformance from "./StockAllTimePerformance";
import StockCompanyAbout from "./StockCompanyAbout";
import StockCompanyHistory from "./StockPeerCompanies";
import StockGraphContainer from "./StockGraphContainer";
import StockMarketValuation from "./StockMarketValuation";
import StockPrediction from "./StockPrediction";
import StockShareHolders from "./StockShareHolders";
import StockNews from "./StockNews";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const StockContainer=({stock})=>{
    
    const [Data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const navigate=useNavigate();

    useEffect(()=>{
        async function FetchStock(name) {
            try{
                setLoading(true);
                const res=await fetch(`${import.meta.env.VITE_API_URL}/api/stock/${name}`);
                const resdata=await res.json();

                if(!res.ok || resdata.error){
                    throw new Error("Stock Details Not Found for this stock")
                }

                setData(resdata);
                setError(null);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false)
            }
        }
        FetchStock(stock);
        
    },[stock]);

    const Notify=()=>toast.error("The Stock Data is Not Available");

    useEffect(()=>{
        if(error){
            Notify();
            navigate(-1);
        }
    },[error,navigate]);

    if(loading){
        return <h1>Loading.....</h1>
    }

    return (
        <div className="m-5 flex flex-col gap-10 rounded-2xl border border-gray-400 p-10">
            <StockHead data={Data} />
            <StockGraphContainer data={Data}/>
            <div className="flex items-center justify-between">
                <StockAllTimePerformance data={Data} />
                <StockMarketValuation data={Data} />
            </div>
            <StockCompanyAbout data={Data} />
            <StockCompanyHistory data={Data?.stockDetailsReusableData?.peerCompanyList} />
            <StockShareHolders data={Data?.shareholding} />
            <StockNews data={Data?.recentNews} />
            <StockPrediction data={Data} />
        </div>
    );
}
export default StockContainer;