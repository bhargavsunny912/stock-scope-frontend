import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../Redux/IsLogin";
import { toast } from "react-toastify";

const Navbar=()=>{

    const [search,setSearch]=useState("");
    const [notify,setNotify]=useState(false);
    
    const status=useSelector((state)=>state.IsLogin.value);

    const dispatch=useDispatch();

    async function submitLogout() {
        const res=await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`,{
            method:"GET",
            credentials:"include"
        });
        const resdata=await res.json();
        if(resdata.status=="Success"){
            dispatch(checkAuth(false));
        }
    }

    const Notify=()=>toast.error("Search Will Be Available Soon ....");

    const handleSearch=()=>{
        if(!notify){
            Notify();
            setNotify(true);
        }
    }

    const NotifyLogout=()=>toast.success("Logout Successfull !.....");

    const handleLogout=async()=>{
        await submitLogout();
        if(status){
            NotifyLogout()
        }
    }

    const handleInputSearch=(e)=>{
        setSearch(e);
    }
    
    const navLinkClass = ({ isActive }) =>
  `relative pb-1 text-xl font-semibold transition-colors duration-1000
   ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}
   after:content-[""] after:absolute after:left-0 after:bottom-0
   after:h-[2px] after:w-full after:bg-blue-600
   after:origin-left after:scale-x-0
   after:transition-transform after:duration-1000
   hover:after:scale-x-100
   ${isActive ? "after:scale-x-100" : ""}`;

    return (
        <div className="fixed z-99 bg-white border border-l-0 border-r-0 border-t-0 border-b-black top-0 flex items-center justify-between w-full h-[10%] py-10 px-5">
            <Link to="/" className="flex gap-3 items-center justify-items-start">
                <svg viewBox="0 0 20 20" fill="none" width="40" height="40" className="bg-blue-700 p-2 text-5xl rounded-lg">
                <polyline points="2,14 7,8 11,11 18,4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="4" r="2" fill="white" />
              </svg>
                <h1 className="text-3xl font-semibold">Stock Scope</h1>
            </Link>
            <div className="flex items-center justify-center gap-10">
                <NavLink to="/Stocks" className={navLinkClass}>Stocks</NavLink>
                <NavLink className={navLinkClass} to="/IPOS">IPO's</NavLink>
                <NavLink className={navLinkClass} to="/MutualFunds">Mutual Funds</NavLink>
            </div>
            <input className="focus:outline-2 focus:outline-blue-700 p-2 w-[30%] border border-gray-400 rounded-lg" type="text" value={search} onKeyDown={handleSearch} onChange={(e)=>handleInputSearch(e.target.value)} placeholder={`Search Stocks , IPO's , Funds ....`}/>
            <div className="flex items-center gap-3">
                <Link to="/Watchlist" className="hover:bg-blue-600 transition-transform duration-200 hover:scale-[1.1] active:scale-[0.90] py-2 px-4 gap-2 flex items-center font-semibold rounded-lg border-none bg-blue-700 text-white"><span><FaStar /></span><span>WatchList</span></Link>
                <Link onClick={handleLogout} to={status?"/":"/auth"} className="hover:bg-blue-600 transition-transform duration-200 hover:scale-[1.1] active:scale-[0.90] py-2 px-4 gap-2 flex items-center font-semibold rounded-lg border-none bg-blue-700 text-white"><span>{!status?"Login":"Logout"}</span></Link>
            </div>
        </div>
    );
}
export default Navbar;