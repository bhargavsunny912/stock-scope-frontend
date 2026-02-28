import Ipo from "./Ipo";

const IpoBody=({data})=>{

    return (
        <div className="flex overflow-scroll scrollHide gap-10">
            {data?.active?.map((Ipos,index)=>{
              return <Ipo key={index} Ipo={Ipos} type={"Active"}/>
            })}
        </div>
    );
}
export default IpoBody;