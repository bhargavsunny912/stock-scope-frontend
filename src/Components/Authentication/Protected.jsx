import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom";


const Protected=()=>{

    const status=useSelector((state)=>state.IsLogin.value);
    
    if(!status){
        return <Navigate to="/auth" />
    }

    return (
        <>
            {<Outlet />}
        </>
    );
}
export default Protected;