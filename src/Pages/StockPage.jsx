import { useParams } from "react-router-dom";
import StockContainer from "../Components/Stock/StockContainer";

const StockPage=()=>{

    const params=useParams();
    return (
        <>
            <StockContainer stock={params.name} />
        </>
    );
}
export default StockPage;