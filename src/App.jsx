import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { lazy,Suspense, useEffect } from 'react'
import HomePage from './Pages/HomePage'
import Layout from './Pages/Layout'
import StockScopeAuth from './Components/Authentication/StockScopeAuth'
import PageLoader from './Components/Authentication/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './Redux/IsLogin'
import OAuthSuccess from './Components/Authentication/OAuthSuccess'

const StockPage=lazy(()=>import('./Pages/StockPage'));
const IPOPage=lazy(()=>import('./Pages/IPOPage'));
const WatchListPage=lazy(()=>import('./Pages/WatchListPage'));
const MutualFundPage=lazy(()=>import('./Pages/MutualFundPage'));
const Ipo=lazy(()=>import('./Components/IPO/Ipo'));
const AllStocks=lazy(()=>import('./Pages/AllStocks'));
const Protected=lazy(()=>import('./Components/Authentication/Protected'));

function App() {

    const status=useSelector((state)=>state.IsLogin.value);
    const dispatch=useDispatch();
    
      useEffect(()=>{
        if(status!==true){
            async function isLogin() {
            const res=await fetch(`${import.meta.env.VITE_API_URL}/auth/islogin`,{
                method:"GET",
                credentials:"include",
                headers:{
                    "Content-type":"application/json"
                }
            });
            const resdata=await res.json();
            
            if(resdata.status=="Success"){
                dispatch(checkAuth(true));
            }
            else{
                dispatch(checkAuth(false));
            }
        }
        isLogin()
        }
    },[status,dispatch]);

  return (
    <div className='overflow-x-hidden'>
      
      <Suspense fallback={<PageLoader />}>
          <Routes>
          <Route path='/auth' element={<StockScopeAuth />} />
          <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route path='/' element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route element={<Protected />}>
              <Route path='Stocks' element={<AllStocks />} />
              <Route path='Stocks/:name' element={<StockPage />} />
              <Route path='IPOS' element={<IPOPage />} />
              <Route path='IPOS/:symbol/:type' element={<Ipo />} />
              <Route path='Watchlist' element={<WatchListPage />} />
              <Route path='MutualFunds' element={<MutualFundPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  )
}

export default App
