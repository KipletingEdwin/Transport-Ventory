import "../App.css";
// import React,{useState,useEffect} from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
// import Navbar from "./Navbar";
import Nav from "./Nav";



function App() { 
//   const[currentUser,setCurrentUser] = useState(''); 
 

//   useEffect(() => {
//     fetch("/auth")
//     .then((r) => {
//       if(r.ok){r.json().then(user =>setCurrentUser(user))
//       }
//     })
//   },[])


  // if (currentUser)return ( <> <div className='mypage'>
  // <Home  currentUser={currentUser} setCurrentUser={setCurrentUser}  />
  // </div>
  //   </> )
  // if (!currentUser) return <SignIn setCurrentUser={setCurrentUser}  />  

  return ( 
    <>
     
    <main>
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Nav/>
        <Routes>
          {/* <Route path="/"  currentUser={currentUser} element={<Home />}/>  */}
          <Route path="/"   element={<Home />}/> 
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="signin" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<SignIn />} /> */}
          <Route path="/login"  element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    
    </div> 
    </main>
    </>
  );
}



export default App;
