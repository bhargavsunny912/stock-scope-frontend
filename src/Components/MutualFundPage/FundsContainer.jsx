import SpecificFund from "./SpecificFund";
import UseColorGenerator from "../../Custom Hooks/UseColorGenerator";
import SectionAnimation from "../SectionAnimation/SectionAnimation";

const FundsContainer=({data,type,fund})=>{

    const {random1,random2,random3}=UseColorGenerator();

    return (
    <SectionAnimation>
        <div className="m-10">
            <h1 style={{backgroundColor:`rgb(${random1},${random2},${random3})`}} className="font-bold text-2xl mb-10 py-2 px-4 text-white rounded-xl w-fit">Top {fund} Funds</h1>
            <SpecificFund data={data} type={type} />
        </div>
    </SectionAnimation>
    );
}
export default FundsContainer;