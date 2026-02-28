import InfoContainer from "../Components/Info/InfoContainer";
import IpoContainer from "../Components/IPO's/IpoContainer";
import MutualfundContainer from "../Components/MutualFunds/MutualfundContainer";
import StockContainer from "../Components/Top Stocks/StockContainer";
import SectionAnimation from "../Components/SectionAnimation/SectionAnimation";

const HomePage=()=>{
    return (
        <>
            <SectionAnimation>
                <InfoContainer />
            </SectionAnimation>
            <SectionAnimation>
                <StockContainer />
            </SectionAnimation>
            <SectionAnimation>
                <IpoContainer />
            </SectionAnimation>
            <SectionAnimation>
                <MutualfundContainer />
            </SectionAnimation>
        </>
    );
}
export default HomePage;