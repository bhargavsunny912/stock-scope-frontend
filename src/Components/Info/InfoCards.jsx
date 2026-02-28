import { Link } from "react-router-dom";

const InfoCards=({data})=>{
    return (
        <Link to={data.redirect} className="hover:shadow-xl p-5 gap-3 flex flex-col border border-gray-300 w-[30%] rounded-xl">
            <div className="flex items-center justify-between">
                <h1 className="p-2 h-10 w-10 flex items-center justify-center bg-green-200 text-green-700 rounded-lg">{data.symbol}</h1>
                <h1 className="text-green-700 font-semibold">{data.percentage}</h1>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="font-semibold">{data.title}</h1>
            </div>
        </Link>
    );
}
export default InfoCards;