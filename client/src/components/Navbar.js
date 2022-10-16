// import React,{useEffect,useState} from "react";
// // import { Link } from 'react-router-dom';
// import New from "./New";

// function Navbar({id}) { 
//     const[info,setInfo] = useState([]);

//     function handleDelete(id){
//         fetch(`/vehicles/${id}`,{
//             method: "DELETE",
//         })
//         .then((res) => res.json())
//         .then(() => onDelete());
//     }

//     function onDelete(id){
//         const rem = info.filter((item) =>{
//             return item.id !== id;
//         });
//         setInfo(rem);
//         window.location.reload(false);
//     }





//     useEffect(() => {
//         fetch("/vehicle")
//         .then(r => r.json())
//         .then((data) => setInfo(data));
//     },[]);

//     const allData = info.map((one,index) => {
//         return(  
//                  <New 
//                  handleDelete={handleDelete}
//                  key={index}
//                  date_b= {one.date_bought}
//                  my_image = {one.image_url}
//                  reg_no = {one.registration_number}
//                  id={one.id}
//                  />
    
//         )

//     })

//     return(
//         <div>{allData}</div>
//     )


// }

// export default Navbar;
