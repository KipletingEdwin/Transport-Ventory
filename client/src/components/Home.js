import React from 'react' 
import Navbar from './Navbar';
import NewForm from './NewForm';



    function Home({currentUser,setCurrentUser}) { 


    function handleLogout (){
        fetch("/logout",{
            method: "DELETE"})
            .then((res) => {
                if (res.ok){
                    setCurrentUser(null);
                    // alert("Are you sure you want to logout?")
                }
            });
    }


        return (
    <> <div className='home'>
            <div className='logged'> <h3>Logged in as: {currentUser.email}  <button onClick={handleLogout} >Logout</button> </h3> </div>
            <div className='add' ><NewForm currentUser={currentUser} /></div>
            <div className='barnav' > 
               <Navbar/>
             </div>
              </div>
              </>
 ) ;
   

    
}

export default Home