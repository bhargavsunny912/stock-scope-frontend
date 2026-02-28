import InfoCards from "./InfoCards";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";

const InfoContainer=()=>{

    const data=[
        {
            percentage:"Current",
            title:"Top Gainers",
            count:247,
            symbol:<FaArrowTrendUp />,
            redirect:"/Stocks#TopGainers"
        },
        {
            percentage:"Current",
            title:"Top Losers",
            count:189,
            symbol:<FaArrowTrendDown />,
            redirect:"/Stocks#TopLosers"
        },
        {
            percentage:"New",
            title:"Upcoming IPO's",
            count:12,
            symbol:<FaRocket />,
            redirect:"/IPOS#UpcomingIPOs"
        },
        {
            percentage:"Active",
            title:"Mutual Funds",
            count:1256,
            symbol:<FaChartPie />,
            redirect:"/MutualFunds"
        }
    ]

    return (
        <div className="flex my-5 items-center gap-5 mx-5">
            {data.map((d,index)=>{
                return <InfoCards key={index} data={d} />
            })}
        </div>
    );
}
export default InfoContainer;