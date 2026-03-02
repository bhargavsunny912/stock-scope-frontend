import {useEffect, useRef, useState} from "react";

const Signup=({setTab})=>{

    const [details,setDetails]=useState({email:"",password:"",username:""});
    const [response,setResponse]=useState("");
    const inputRef=useRef();

    useEffect(()=>{
      inputRef.current.focus();
    },[]);

    async function SubmitForm(details) {
        try{
            const res=await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            credentials:"include",
            body:JSON.stringify({
                email:details.email,
                password:details.password,
                username:details.username
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

    const handleClick=(e)=>{
        if(e.key=="Enter"){
            handleSignupForm();
        }
    }

    const handleSignupForm=async()=>{
        
        const res=await SubmitForm(details);
        if(res.status=="Success"){
            setTab("login")
            setDetails((pre)=>({...pre,email:"",password:"",username:""}));
        }
    }

    return (
        <div onKeyDown={handleClick} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", margin: 0 }}>Start for free.</h2>
                <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 4, marginBottom: 0 }}>Create your StockScope account today.</p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="input-label">USERNAME</label>
                <input ref={inputRef} value={details.username} onChange={(e)=>setDetails((pre)=>({...pre,username:e.target.value}))} className="input" type="text" name="username" placeholder="John dee" required/>  
              </div> 
              <div className="flex flex-col gap-2">
                <label className="input-label">EMAIL ADDRESS</label>
                <input value={details.email} onChange={(e)=>setDetails((pre)=>({...pre,email:e.target.value}))} className="input" type="email" name="emial" placeholder="you@example.com" required/>  
              </div>              
              <div className="flex flex-col gap-2">
                <label className="input-label">PASSWORD</label>
                <input value={details.password} onChange={(e)=>setDetails((pre)=>({...pre,password:e.target.value}))} className="input" type="password" name="password" placeholder="Min. 8 characters" required/>  
              </div> 

              {response.msg && <p className={response.status=="Failed"?"text-red-500 text-center":"text-green-500 text-center"}>{response.msg}</p>}

              <button onClick={handleSignupForm} className="primary-btn mt-4"
                onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
                onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}>
                CREATE ACCOUNT →
              </button>
              <hr />

              <button onClick={() => window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`} className="relative flex items-center justify-center gap-3 w-full max-w-sm px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-gray-700 font-semibold">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5"/>
                Signup with Google
              </button>

              <p style={{ textAlign: "center", fontSize: 11, color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>
                By signing up you agree to our{" "}
                <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>Terms</a> and{" "}
                <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>Privacy Policy</a>.
              </p>

              <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", margin: 0 }}>
                Already have an account?{" "}
                <button onClick={() => setTab("login")} className="link-btn">Sign in</button>
              </p>
            </div>
    );
}
export default Signup;