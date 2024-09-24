import React,{useContext,useEffect,useState} from 'react'
import "./LoginPage.css"

const LoginPage = ({setShowLogin}) => {
  const [currState,setCurrState]=useState("Sign Up");
  const [data,setData]=useState({
    username:"",
    email:"",
    password:""
  })
  const onChangeHandler=(event)=>{
    const {name,value}=event.target;
    setData({...data,[name]:value})
  }
  // useEffect(()=>{
  //   console.log(data);   
  // },[])
  const onLogin=async (event)=>{
    event.preventDefault();
    const new_url=currState==="Login" ?"/login":'/register';
    console.log(data);  
  }
  return (
    <div className="login-page">
      <form onSubmit={onLogin} className='login-page-container'>
        <div className="login-page-left">

          <img src="./LoginImgs/DocImg.png" alt="" />
        </div>
        <div className="login-page-right">
          <div className="login-page-title">
            <h3>{currState}</h3>
            <img onClick={()=>setShowLogin(false)} src="./LoginImgs/cross_icon.png" alt="Close" />
          </div>
          <div className="login-page-input">
              <input name='username' onChange={onChangeHandler} value={data.username} type="text" placeholder='Your Username' required />
              {currState === "Login" ? null : <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />}
              <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
          </div>
          <div className="Login-page-buttons">
          <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
          <button type='submit' className='emergency'>Emergency??Click Here</button>
          </div>
          {currState === "Sign Up" ?
              <div className="login-page-condition">
                  <input type="checkbox" required />
                  <p>By continuing, I agree to the terms of use & privacy policy.</p>
              </div>
          : null}
           {currState === "Login" ?
              <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
              :
              <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
            }
        </div>
      </form>
    </div>
  )
}

export default LoginPage
