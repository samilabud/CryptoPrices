import React,{useState, useEffect, useMemo} from 'react';
import env from "react-dotenv";

import './login.styles.css';

export const Login = () =>{
  const [classContainerName,setClassContainerName] = useState("containerlogin");
  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState("");


  //Login uncontrolled
  const inputEmail = React.createRef();
  const inputPassword = React.createRef();
  //Signup uncontrolled
  const signUpInputName = React.createRef();
  const signUpInputEmail = React.createRef();
  const signUpPassword = React.createRef();

  //Change forms
  const signUpButtonFade = (event) =>{
    event.preventDefault();
    setClassContainerName("right-panel-active containerlogin");
  };

  const signInButtonFade = (event) => {
    event.preventDefault();
    setClassContainerName("containerlogin");
  };
  //Auth
  const signUpButton = (event) =>{
    event.preventDefault();
    //console.log(`Trying to signUp with Name:${signUpInputName.current.value} Email: ${signUpInputEmail.current.value} and Password: ${signUpPassword.current.value}`);
    
    try{
      fetch(env.API_URL+"register",{
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          name:signUpInputName.current.value,
          email:signUpInputEmail.current.value,
          password:signUpPassword.current.value
        })
      })
      .then(data=>data.json())
      .then(data=>{
        if(data.id)
          setSignUpError("User register successful")
        else
          setSignUpError("User register unsuccessful")
      })
      .catch((error)=>{
        console.log("un error ha ocurrido",error)
      })
    }catch(error){
      console.log("Error trying to register the user.",error)
    }
  };

  const signInButton = (event) => {
    event.preventDefault();
    //console.log(`Trying to login with Email: ${inputEmail.current.value} and Password: ${inputPassword.current.value}`);
    fetch(env.API_URL+"signin",{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email:inputEmail.current.value,
        password:inputPassword.current.value
      })
    })
    .then(data=>data.json())
    .then(userdata=>{
      if(userdata.id){
        setLoginError("User login successful");
      }else
        setLoginError("User or password are wrong");
    })
    .catch((error)=>{
      console.log("Error when trying to auth the user.",error)
    })
  };

  
  useEffect(()=>{
    /*try{
      fetch("http://localhost:8000")
      .then(data=>data.json())
      .then(data=>console.log(data))
    }catch(error){
      console.log("Error buscando el usuario en UserAPI.", error)
    }*/
  },[])
  return (
    <div className="bodycontainer">
      <div className={classContainerName} id="container" >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>use your email for registration</span>
            <input type="text" placeholder="Name" ref={signUpInputName} />
            <input type="email" placeholder="Email" ref={signUpInputEmail}/>
            <input type="password" placeholder="Password" ref={signUpPassword} />
            <button onClick={signUpButton}>Sign Up</button>
            <span className="error">{signUpError}</span>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <span>use your account</span>
            <input type="email" placeholder="Email" ref={inputEmail}  />
            <input type="password" placeholder="Password" ref={inputPassword} />
            <button onClick={signInButton}>Sign In</button>
            <span className="error">{loginError}</span>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={signInButtonFade}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signUpButtonFade}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}


export default Login;