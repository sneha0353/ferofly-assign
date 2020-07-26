import React from "react"

const Contact=()=>{
    return(
        <div className="jumbotron  pt-5 mt-5 ">
       <h2 
       id="con"
       className="mb-5 pt-5"
       style={{textAlign:"center",fontWeight:"lighter"}}>CONTACT US</h2>
       <div className="row ml-5 pl-5">
        <p
        className="pr-4 ml-5 pl-5"
        style={{fontStyle:"italic",fontWeight:"lighter"}}
        >info@mysite.com 
       </p>
       <p
       className="pr-5 "
       style={{fontStyle:"italic",fontWeight:"lighter"}}
       >/
      </p>
      <p
      className="pr-4 pl-5 ml-5"
      style={{fontStyle:"italic",fontWeight:"lighter"}}
      >500 Terry Francois Street, San Francisco, CA 94158
     </p>
     <p
       className="pr-5"
       style={{fontStyle:"italic",fontWeight:"lighter"}}
       >/
      </p>
      <p
       className="pr-5 ml-5"
       style={{fontStyle:"italic",fontWeight:"lighter"}}
       >Tel: 123-456-7890 
      </p>
       </div>
       <div className="container">
       <form>
       <div class="form-row">
       <div class="form-group col-md-6 ">
       <label for="inputEmail4"></label>
       <input type="text" class="form-control" id="inputEmail4"
        placeholder="Name*"
       />
      </div>
     <div class="form-group col-md-6 ">
      <label for="inputPassword4"></label>
      <input type="email" class="form-control" 
      placeholder="Email*"
      id="inputPassword4"/>
    </div>
    </div>
    <div class="form-group ">
    <label for="inputAddress"></label>
    <input type="text" class="form-control" 
    placeholder="Submit"
    id="inputAddress"/>
   </div>
   <div class="form-group ">
    <label for="inputAddress2"></label>
    <textarea 
    style={{height:"120px"}}
    type="text" class="form-control " id="inputAddress2"
    placeholder="Message"
    />
  </div>
   
  </form>
  <input 
  style={{backgroundColor:"black",color:"white"}}
  type='submit' 
  className='form-control'
   id='submit' />
  </div>
       </div>
    )
}
export default Contact;