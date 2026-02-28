import { useEffect, useRef } from "react";

const StockHead=({data})=>{

    const focusRef=useRef();

    useEffect(()=>{
        focusRef.current.focus();
    },[]);

    const letter=(data?.companyName);
    
    return (
        <div ref={focusRef} className="flex flex-col">
            <div className="flex w-full items-center justify-start gap-5">
                <h1 className="text-3xl font-bold p-2 h-16 w-16 flex items-center justify-center text-white bg-blue-500 rounded-xl">{letter?.[0]}</h1>
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-bold">{data?.companyName}</h1>
                    <div className="flex gap-5 items-center">
                        {/* <h1 className="text-red-500 bg-red-100 py-1 px-2 font-semibold rounded-sm">NSE: {data.companyProfile.exchangeCodeNse}</h1> */}
                        <h1 className="text-red-500 bg-red-100 py-1 px-2 font-semibold rounded-sm">NSE: {data?.companyProfile?.exchangeCodeNse}</h1>
                        <h1 className="px-2 py-1 bg-green-100 font-semibold text-green-700 rounded-sm">{data?.industry}</h1>
                    </div>
                </div>
            </div>
            <hr className="mt-5 text-gray-500" />
        </div>
    );
}
export default StockHead;