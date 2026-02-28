import Mutualfund from "../MutualFunds/Mutualfund";

const SpecificFund = ({data,type}) => {
  return (
    <div className="flex flex-wrap justify-around gap-5">
        {data?.map((mf,index)=>{
            return <Mutualfund key={index} mf={mf} type={type} />
        })}
    </div>
  );
};

export default SpecificFund;