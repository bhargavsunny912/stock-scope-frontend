import Ipo from "../IPO's/Ipo";

const SpecificIpo = ({ipo,type}) => {

  return (
    <div className="flex items-center gap-5 overflow-x-scroll scrollHide">
      {ipo?.map((ipo,index)=>{
        return <Ipo key={index} type={type} Ipo={ipo} />
      })}
    </div>
  );
};

export default SpecificIpo;