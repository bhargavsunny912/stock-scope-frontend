import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import IpoDates from "./IpoDates";
import IpoDescription from "./IpoDescription";
import IpoKeyMetrics from "./IpoKeyMetrics";
import IpoListing from "./IpoListing";
import IpoNav from "./IpoNav";
import { useEffect, useState } from "react";


const Ipo=()=>{

    const {symbol,type}=useParams();
    const [data,setData]=useState([]);
    const Ipo=data?.find((i)=>i.symbol==symbol);

    const navigate=useNavigate();   

    if(!Ipo){
        navigate(-1);
    }

    useEffect(()=>{
        async function SpecificIpoData(type){
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/ipo`);
            if(!res.ok){
                throw new Error("Failed to fetch Ipo Data");
            }
            const resdata=await res.json();
            setData(resdata?.[type.toLowerCase()]||[]);
        }
        SpecificIpoData(type)
    },[symbol,type]);

    return (
        <>
            <div className="flex flex-col gap-10 m-10 border border-gray-400 rounded-xl p-5">
                <IpoNav ipo={Ipo}/>
                <div className="flex items-center justify-between"> 
                    <IpoKeyMetrics  ipo={Ipo}/>
                    <IpoDates ipo={Ipo}/>
                   <IpoListing ipo={Ipo}/>
                </div>
                <IpoDescription ipo={Ipo}/>
            </div>
        </>
    );
}
export default Ipo;