import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

function OAuthSuccess() {

  const navigate = useNavigate();

  const NotifyLogin=()=>toast.success("LogIn Successfull !.....");

  useEffect(() => {
    navigate("/");
    NotifyLogin();
  }, [navigate]);

  return <p>Logging in...</p>;
}

export default OAuthSuccess;