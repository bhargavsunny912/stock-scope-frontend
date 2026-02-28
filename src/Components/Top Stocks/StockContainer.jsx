import StocksTable from "./StocksTable";
import StockNav from "./StockNav";

const StockContainer=()=>{
    return (
        <div className="mx-5 my-10">
            <StockNav />
            <StocksTable />
        </div>
    );
}
export default StockContainer;