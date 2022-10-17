import React,{useState} from 'react'
// import { useState } from 'react/cjs/react.production.min'

function NewForm({currentUser}) {
  const[formData1,setFormData1] =useState({
      date_bought:"",
      image_url:"",
      registration_number:"",
      user_id:currentUser.id

  });
//   console.log(currentUser.id)

  function handleNewChange(event){
      setFormData1({...formData1,[event.target.name]: event.target.value});
      console.log(formData1)
  }


  function handleNewCar(e){
      e.preventDefault();
      if (
          formData1.date_bought === "" ||
          formData1.image_url === "" ||
          formData1.registration_number === ""
      ){
          alert("Please fill in all required fields")
      } else 
      fetch("/vehicle",{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify(formData1),
      })
      .then((response) => response.json())
      .then((newData) => console.log(newData))


  }





  return (
    <div className='newform' >
      
    <div>
      <label htmlFor='date'>Date Bought</label>
        <input type="date" name="date_bought" placeholder="Date" onChange={handleNewChange} ></input>
        <label htmlFor='date'>Image Link</label>
        <input type="url" name="image_url" placeholder="Image Link" onChange={handleNewChange} ></input>
        <label htmlFor='date'>Registration Number</label>
        <input type="text" name="registration_number" placeholder='Registration Number'onChange={handleNewChange}  ></input>
        <button onClick={handleNewCar}>Add</button>
    </div>

    </div>
  )
}

export default NewForm