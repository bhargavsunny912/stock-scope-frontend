import {useEffect,useState } from "react";

const UseFetchApi=(url)=>{

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);  

    useEffect(()=>{

        const Controller=new AbortController();
        const {signal}=Controller;

        async function FetchData(){
            try {   
                const res=await fetch(url, {signal});

                if(!res.ok){
                    throw new Error(`HTTP ${res.status}`);
                }
                const resdata=await res.json();
                setData(resdata);
            }
            catch(err){
               if (err.name !== "AbortError") {
                    setError(err.message);
                }
            }       
            finally{
                setLoading(false);
            }
        }
        FetchData();

        return()=>{Controller.abort()};

    },[url]);

    return {data,loading,error};    
}   
        
export default UseFetchApi;