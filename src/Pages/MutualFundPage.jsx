import FundsContainer from "../Components/MutualFundPage/FundsContainer";
import UseFetchApi from "../Custom Hooks/UseFetchApi";
import MutualfundSkeleton from "../Components/MutualFunds/MutualfundSkeleton";

const MutualFundPage=()=>{

    const {data,error,loading}=UseFetchApi(`${import.meta.env.VITE_API_URL}/api/mutualfunds`);

    if(loading || error){
        return (
            <div className="w-[90%] mx-auto my-10">
                <h1 className="bg-cyan-300 font-bold text-2xl mb-10 py-2 px-4 text-white rounded-xl w-fit">Top Small Cap Funds</h1>
                <MutualfundSkeleton />
            </div>
        );
    }

    return (
        <>
            <FundsContainer data={data?.Equity?.["Small-Cap"]} type={"Equity"} fund={"Small-Cap"}/>
            <FundsContainer data={data?.Equity?.["Mid-Cap"]} type={"Equity"} fund={"Mid-Cap"}/>
            <FundsContainer data={data?.Equity?.["Large-Cap"]} type={"Equity"} fund={"Large-Cap"}/>
            <FundsContainer data={data?.Equity?.["Flexi Cap"]} type={"Equity"} fund={"Flexi Cap"}/>
            <FundsContainer data={data?.Equity?.["ELSS (Tax Savings)"]} type={"Equity"} fund={"ELSS (Tax Savings)"}/>
            <FundsContainer data={data?.Equity?.["Sector - Technology"]} type={"Equity"} fund={"Sector - Technology"}/>
            <FundsContainer data={data?.Equity?.["Sector - Healthcare"]} type={"Equity"} fund={"Sector - Healthcare"}/>
            <FundsContainer data={data?.["Global Fund of Funds"]?.["Global - Other"]} type={"Global Funds"} fund={"Global Fund of Funds"}/>
            <FundsContainer data={data?.["Index Funds"]?.["Index Funds"]} type={"Index Funds"} fund={"Index Funds"}/>

        </>
    );
}
export default MutualFundPage;