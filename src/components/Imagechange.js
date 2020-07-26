import React from "react"
import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.jpeg"
import pic3 from "./images/pic3.jpeg"
import pic4 from "./images/pic4.jpeg"
import pic5 from "./images/pic5.jpg"
import pic6 from "./images/pic6.jpeg"
const ImageChange=()=>{
    var picPaths = [pic1,pic2,pic3,pic4,pic5,pic6];
    var curPic = -1;
    //preload the images for smooth animation
    var img1 = new Array();
    for(var i=0; i < picPaths.length; i++) {
        img1[i] = new Image();
        img1[i].src = picPaths[i];
    }
   

    window.onload=function swapImage()
    {

       const imgCont=this.document.getElementById("banner1")
       const imgCont1=this.document.getElementById("banner2")
       const imgCont2=this.document.getElementById("banner3")
       if(curPic<=1)
       {
       curPic = (++curPic > picPaths.length-1)? 0 : curPic;
       imgCont.src = img1[curPic].src;
       setTimeout(swapImage,1000);
       }
       else if(curPic<=3)
       {
        curPic = (++curPic > picPaths.length-1)? 0 : curPic;
        imgCont1.src = img1[curPic].src;
        setTimeout(swapImage,1000);  
       }
       else if(curPic<=5)
       {
        curPic = (++curPic > picPaths.length-1)? 0 : curPic;
        imgCont2.src = img1[curPic].src;
        setTimeout(swapImage,1000);  
       }
   }
   
    return (
<div className="container">
<h2 className="pt-5 mt-5 mb-5"
id="im"
style={{textAlign:"center",fontWeight:"lighter"}}
>GALLERY</h2>

<div class="row">
  <div class="col-4"
  >
    <img 
    src=""  alt="" 
    id="banner1"
    style={{width:"100%",height:"400px"}}/>
  </div>
  <div class="col-4"
  >
    <img
    src="" alt="" 
    id="banner2"
    style={{width:"100%",height:"400px"}}/>
  </div>
  <div class="col-4"
  >
    <img 
    src="" 
    id="banner3"
    alt="Mountains" style={{width:"100%",height:"400px"}}/>
  </div>
</div>

      
      </div>
    )
}
export default ImageChange;