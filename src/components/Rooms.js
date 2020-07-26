import React from "react"
import { Parallax, Background } from 'react-parallax';
import sky from './images/sky.jpg'
const Rooms=()=>{
    return(
      <div className='m-5' id='header2'>
        <Parallax 
        strength={500}>
      <div
      style={{height:"600px"}}
      >
      <div class="card" style={{marginLeft:"20%", marginRight:'20%',
       marginTop:"5%" ,height:'500px'
        }}>
     <div class="card-body ml-4">
     <h1 className="card-title text-center mb-4"
     id='o1'
     >OUR ROOMS</h1>
     <p className="card-text" id="c2">
     I'm a paragraph.
      Click here to add your own text and edit me.
       I’m a great place for you to tell a story and let your users
        know a little more about you.Sed vel risus aliquet, blandit ante non, vehicula dui. Fusce dui orci, tristique vitae ex vitae, suscipit ullamcorper lorem. Vestibulum laoreet sit amet eros eget ornare. Ut vulputate leo id lectus hendrerit, in condimentum lacus maximus. Nam vel elit in erat pharetra aliquam. Sed vestibulum urna a ante feugiat, eget pharetra eros elementum. Curabitur pharetra mauris non nisl iaculis, non ullamcorper sem mattis. Proin nibh dolor, volutpat sed lorem eget, tempus suscipit massa. Duis libero risus, sollicitudin a tristique eu, ultricies ut odio. In efficitur ipsum sed turpis aliquet interdum. Sed convallis dui nec leo vulputate, vitae rutrum nulla venenatis. Maecenas vitae tellus gravida, condimentum urna non, bibendum nisi. Donec sem tellus, placerat id dui eu, vulputate mattis dui.
        Vivamus purus enim, feugiat sit amet gravida vel, dictum vitae tellus. Sed ut porta neque. Donec in finibus odio, sollicitudin vehicula ante. Etiam non magna condimentum, venenatis erat non, sollicitudin felis. Pellentesque quis condimentum massa. Cras suscipit massa lobortis est eleifend lacinia. Phasellus eget libero non lectus ornare sagittis quis nec tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem bibendum, euismod nisl eu, vehicula dui. Suspendisse eget elit condimentum, rutrum purus ut, posuere ipsum. Suspendisse ut pulvinar magna, sit amet hendrerit ex. Morbi vitae consectetur diam. Nulla facilisi.
        Suspendisse cursus efficitur ultrices. Proin placerat nisi nibh, vitae molestie risus commodo at. In commodo lacus nec lorem vehicula euismod. Vivamus vitae maximus ex. Praesent blandit est ut posuere accumsan. Praesent nisl velit, eleifend vel maximus vitae, interdum sed libero. Donec nunc nunc, commodo eu nisl in, posuere tincidunt est. Nunc rutrum neque vitae nisi semper hendrerit. Duis dignissim interdum mauris, quis faucibus leo auctor vel. Phasellus malesuada felis quis purus consectetur dictum. Maecenas lacinia odio a urna egestas pellentesque. 
     </p>
     <div className='text-center'>
     <a 
     id="ba"
     href="/" className="btn btn-outline-dark mt-3">Go somewhere</a>
     </div>
    </div>
    </div>
     
    
    </div>
      <Background className="custom-bg"
      >
        <img 
        src={sky}  //"https://media.geeksforgeeks.org/wp-content/uploads/pa1.png" 
        alt="fill murray"
        />
      </Background>
    </Parallax>
    </div>
    )
}
export default Rooms;