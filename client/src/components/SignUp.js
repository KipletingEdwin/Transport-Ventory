import React,{useState} from 'react'

function SignUp() { 
  const[loggedUser,setLoggedUser] =useState({
    email: "",
    password: ""
  }) 

  function handleInput(event) {
    setLoggedUser({...loggedUser, [event.target.name]: event.target.value});
    console.log(loggedUser)
  }

  function handleSubmit(e){
    e.preventDefault()
    const myUser = {
      email:"",
      password:""
    }
    fetch(`/users`,{
      method: "POST",
      headers:{
        'Content-Type':'application/json'},
        body:JSON.stringify(myUser)
    })
    .then(res => {
      if (res.ok){
        res.json().then(console.log(res))
      } else {
        res.json().then(console.log(res))
      }
    })
    fetch(`/users`,{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(loggedUser),
    })
    .then((res) => res.json())
    .then((data) =>console.log(data))

  }
  
  return (
    <div className='SignUp'>
         <div className="App">
      <div className='signup'>
        <h3>Sign Up to your account</h3>
        <p>Already have an Account? <span><a href="/login">Sign In.</a></span></p> 
        <div>
        <div>  <label>Email Address</label></div>
        <input type="email" name="email" placeholder= "Email"  onChange={handleInput} ></input>
        </div>
        <div> 
        <div>  <label>Password</label></div>
        <input type="text" name="password" placeholder= "Password"  onChange={handleInput} ></input>
        </div> 
        <button onSubmit={handleSubmit} >Sign Up</button>
      </div>
    </div>

    </div>
  )
}

export default SignUp