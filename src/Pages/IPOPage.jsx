import IPOConatiner from "../Components/IPOPage/IPOConatiner";
import UseFetchApi from "../Custom Hooks/UseFetchApi";
import IpoSkeleton from "../Components/IPO's/IpoSkeleton";
const IPOPage=()=>{

    const {data,error,loading}=UseFetchApi(`${import.meta.env.VITE_API_URL}/api/ipo`);

    if(loading || error){
        return (
            <div className="my-10 w-[90%] mx-auto flex flex-col gap-5 overflow-hidden">
                <h1 className="font-bold text-2xl px-4 py-2 rounded-xl text-white bg-violet-500 w-fit">Top Active IPO's</h1>
                <IpoSkeleton />
            </div>
        );
    }

    return (
        <>
             <IPOConatiner data={data?.["active"]} type={"Active"}/>
             <IPOConatiner data={data?.["listed"]} type={"Listed"} />
             <IPOConatiner data={data?.["upcoming"]} type={"Upcoming"}/>
             <IPOConatiner data={data?.["closed"]} type={"Closed"} />
         </>
     );
}
export default IPOPage;