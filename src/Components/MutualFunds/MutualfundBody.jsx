import Mutualfund from "./Mutualfund";
import UseFetchApi from "../../Custom Hooks/UseFetchApi";
import MutualfundSkeleton from "./MutualfundSkeleton";

const MutualfundBody=()=>{

  const {data,error,loading}=UseFetchApi(`${import.meta.env.VITE_API_URL}/api/mutualfunds`);

    if(loading || error){
        return (
           <div className="flex flex-wrap gap-5">
                <MutualfundSkeleton />
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-5">
            {data?.["Global Fund of Funds"]?.["Global - Other"]?.map((mf,index)=>{
                return <Mutualfund key={index} mf={mf} />
            })}
        </div>
    );
}
export default MutualfundBody;