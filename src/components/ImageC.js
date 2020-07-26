import React from 'react';
import { Parallax, Background } from 'react-parallax';
import pic from './images/weather.jpg';

    const MyComponent = () => (
        <div>
        <h1
        id="header"
        style={{marginTop:'150px'}}
        >Ferofly</h1>
        <h5
        id="ele"
        className="
        mb-5
        mx-5"
        >
        <span 
        >
        &#8212;
        </span>
        Magnify your Journey
        <span 
        >
        &#8212;
        </span>
        </h5>
        <div className='m-5'>
        <Parallax 
        strength={500}>
      <div
      style={{height:"600px"}}
      ></div>

      <Background className="custom-bg"
      >
        <img 
        src={pic} //https://image.winudf.com/v2/image/Y29tLndhbGxpZnkuaGR3YWxscGFwZXJfc2NyZWVuXzFfMTUzNzQ5Njg5MF8wMDE/screen-1.jpg?fakeurl=1&type=.jpg
        alt="fill murray"
        />
      </Background>
    </Parallax>
    </div>
    </div>

    );
    export default MyComponent;
