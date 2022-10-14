import React,{useState} from 'react'

function NewForm() {
  // const[formData1,set]





  return (
    <div className='newform' >
      
    <div>
      <label htmlFor='date'>Date Bought</label>
        <input type="date" name="date_bou" placeholder="Date" ></input>
        <label htmlFor='date'>Image Link</label>
        <input type="text" name="url" placeholder="Image Link" ></input>
        <label htmlFor='date'>Registration Number</label>
        <input type="text" name="registration number" placeholder='Registration Number'></input>
        <button>Add</button>
    </div>

    </div>
  )
}

export default NewForm