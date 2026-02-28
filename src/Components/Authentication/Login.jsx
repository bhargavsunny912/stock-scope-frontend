import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../Redux/IsLogin";
import { toast } from "react-toastify";

const Login = ({setTab}) => {

  const [details,setDetails]=useState({email:"",password:""});
  const [response,setResponse]=useState("");
  const inputRef=useRef();

  useEffect(()=>{
    let timerid=setTimeout(()=>{
        inputRef.current.focus();
    },500);
    return ()=>clearTimeout(timerid);
  },[]);

  async function SubmitForm(details) {
        try{
            const res=await fetch("http://localhost:8000/auth/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify({
                email:details.email,
                password:details.password
            })
        });

        const resdata=await res.json();
        setResponse(resdata);
        return resdata
        }
        catch(err){
            console.log("Error Occured",err);
        }
  }

  const navigate=useNavigate();

  const handleClick=(e)=>{
    if(e.key=="Enter"){
      handleLoginForm();
    }
  }

  const dispatch=useDispatch();

  const NotifyLogin=()=>toast.success("Login Successfull !.....");

  const handleLoginForm=async()=>{
    const res=await SubmitForm(details);
    if(res.status=="Success"){
      dispatch(checkAuth(true));
      NotifyLogin()
      navigate(-1);
      setDetails((pre)=>({...pre,email:"",password:""}));
    }
  }

  return (
    <div onKeyDown={handleClick} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", margin: 0 }}>Welcome back.</h2>
                <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 4, marginBottom: 0 }}>Sign in to your StockScope account.</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="input-label">EMAIL ADDRESS</label>
                <input ref={inputRef} value={details.email} onChange={(e)=>setDetails((pre)=>({...pre,email:e.target.value}))} className="input" type="email" name="emial" placeholder="Enter your Email Address" required/>  
              </div>              
              <div className="flex flex-col gap-2">
                <label className="input-label">PASSWORD</label>
                <input value={details.password} onChange={(e)=>setDetails((pre)=>({...pre,password:e.target.value}))} className="input" type="password" name="password" placeholder="xxxxxxxxxx" required/>  
              </div> 
              
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <a href="#" style={{ fontSize: 12, color: "#3b82f6", textDecoration: "none", fontWeight: 500 }}>
                  Forgot password?
                </a>
              </div>

              {response.msg && <p className={response.status=="Failed"?"text-red-500 text-center":"text-green-500 text-center"}>{response.msg}</p>}

              <button onClick={handleLoginForm} className="primary-btn"
                onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
                onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}>
                SIGN IN →
              </button>

              <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", margin: 0 }}>
                Don't have an account?{" "}
                <button onClick={() => setTab("signup")} className="link-btn">Create one free</button>
              </p>
            </div>
  );
}
export default Login;