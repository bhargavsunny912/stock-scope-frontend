import { configureStore } from "@reduxjs/toolkit";
import IPOActiveReducer from "./IPOActive";
import IPOClosedReducer from "./IPOActive";
import IPOUpcomingReducer from "./IPOActive";
import IPOListedReducer from "./IPOActive";
import stockReducer from "./stockSlice";
import CandleReducer from "./CandleSlice";
import TopStocksReducer from "./TopStocksSlice";
import DurationReducer from "./GraphDuration";
import WatchlistFundsReducer from "./WatchlistFunds";
import WatchlistStocksReducer from "./WatchlistStocks";
import WatchlistIposReducer from "./WatchlistIpos";
import PriceUpdateReducer from "./PriceUpdate";
import IsLoginReducer from "./IsLogin";
import WatchlistStocksReducer1 from "./WatchlistStocks1";
import ChartThemeReducer from "./ChartTheme";

const store=configureStore({
    reducer:{
        "IPOActive":IPOActiveReducer,
        "IpoClosed":IPOClosedReducer,
        "IpoUpcoming":IPOUpcomingReducer,
        "IpoListed":IPOListedReducer,
        "stock":stockReducer,
        "CandleStatus":CandleReducer,
        "TopStocks":TopStocksReducer,
        "Duration":DurationReducer,
        "WatchlistStocks":WatchlistStocksReducer,
        "WatchlistStocks1":WatchlistStocksReducer1,
        "WatchlistIpos":WatchlistIposReducer,
        "WatchlistFunds":WatchlistFundsReducer,
        "PriceUpdate":PriceUpdateReducer,
        "IsLogin":IsLoginReducer,
        "Theme":ChartThemeReducer
    }
});

export default store; 

