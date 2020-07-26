import React from "react"
import { Parallax, Background } from 'react-parallax';
import three from "./images/three.jpg"
const Rooms=()=>{
    return(
        <div className="m mt-5 pt-5">
        <Parallax 
        strength={250}>
      <div
      style={{height:"500px"}}
      >
      <div className="card w-25 h-75" style={{marginLeft:"40%",
       marginTop:"5%"
        }}>
       <div className="card-body mt-5">
       <h5 className="card-title text-center"
        id="c1"
        >GUEST REVIEW
        <div className="mt-5">
        <i className='fas fa-code' style={{fontSize:'36px'}}></i>
        </div>
        </h5>
        <p class="card-text mt-5" id="c2">
         I'm a paragraph.
         Click here to add your own text and edit me.
         I’m a great place for you to tell a story and let your users
         know a little more about you.
     </p>
    </div>
    </div>
     
    
    </div>
      <Background className="custom-bg"
      >
        <img 
        src={three}
        alt="fill murray"
        />
      </Background>
    </Parallax>
    </div>
    )
}
export default Rooms;