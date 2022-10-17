import '../App.css';
import React,{useState} from 'react';


function SignIn() { 
    const [formData,setFormData] =useState({
        email: "",
        password: "",
    })
    
    function handleInput(event) {
        setFormData({...formData,[event.target.name]:event.target.value});
        console.log(formData)
    }
    
    function handleLogin(e){
      e.preventDefault() 
      if (
        formData.email === "" ||
        formData.password === "" 
      ){
        alert("Please enter all the fields")
      } else
      fetch("/login",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(formData),
      })
      .then((res) => res.json()) 
      .then((data) => console.log(data))
      
    }
    // window.location.reload(false);
  return (
    <div className="App">
      <div className='login'>
        <h3>Log in to your account</h3>
        <p>Don't have an account yet? <span><a href='/signup'>Sign Up.</a></span></p> 
        <div>
        <div>  <label htmlFor="email" >Email Address</label></div>
        <input type="email" name="email" placeholder= "Email"  onChange={handleInput} ></input>
        </div>
        <div> 
        <div>  <label htmlFor="password" >Password</label></div>
        <input type="text" name="password" placeholder= "Password"  onChange={handleInput} ></input>
        </div> 
        <button onClick={handleLogin} >Sign In</button> 
      </div>
    </div> 
    
  );
}

export default SignIn;