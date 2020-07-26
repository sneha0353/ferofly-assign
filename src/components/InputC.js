import React from "react"
const InputC=()=>{
    return(
        <div className='container p-3'>
          <div className='row'>
          <div className='col-3'>
          <label for='date'>
          Check In:</label>
          <input type='date' 
          className='form-control'
           id='date' />
          </div>
          <div className='col-3'>
          <label for='co'>
          Check Out:</label>
         <input type='date' className='form-control' id='co' />
        </div>
        <div className='col-2'>
        <label for='adults'>Adults:</label>
          <input type='number' className='form-control'
           id='adults' defaultValue='1' />
        </div>
        <div className='col-2'>
        <label for='kids'>Kids:</label>
          <input type='number' className='form-control'
           id='kids' defaultValue='0' />
        </div>
        
        <div className='col-2'>
        <label for='kids'
        className="mb-4"
        ></label>
          <input 
          style={{backgroundColor:"black",color:"white"}}
          type='submit' 
          className='form-control'
           id='submit' />
        </div>
        
        </div>
        </div>





       
    )
}
export default InputC;