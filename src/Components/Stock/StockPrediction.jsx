import { FaStar } from "react-icons/fa";
import RiskMeter from "./StockRiskMeter";

const StockPrediction=({data})=>{
    return (
        <div className="border p-5 border-gray-400 rounded-xl bg-green-100">
            <h1 className="font-semibold text-2xl text-center">Analyst Recommendation</h1>
            <div className="flex items-center justify-around my-5">
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-6xl font-bold text-green-500">{data?.stockDetailsReusableData?.averageRating}</h1>
                </div>
                <div className="font-semibold text-xl items-center flex flex-col">
                    <h1>Risk meter</h1>
                    <RiskMeter riskValue={data?.riskMeter?.stdDev} />
                </div>
            </div>
        </div>
    );
}
export default StockPrediction;