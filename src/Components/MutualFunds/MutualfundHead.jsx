import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import UseColorGenerator from "../../Custom Hooks/UseColorGenerator";

const MutualfundHead=()=>{

    const {random1,random2,random3}=UseColorGenerator();

    return (
        <div className="flex justify-between items-center my-5 mx-2">
            <h1 style={{backgroundColor:`rgb(${random1},${random2},${random3})`}} className="font-bold text-2xl rounded-xl text-white px-4 py-2">Top Global Fund of Funds</h1>
            <Link to="/MutualFunds" className="bg-blue-600 text-white p-2 rounded-xl flex items-center gap-2 transition-transform duration-200 hover:scale-[1.1] active:scale-[0.90]">View All <FaLongArrowAltRight /></Link>
        </div>
    );
}
export default MutualfundHead;