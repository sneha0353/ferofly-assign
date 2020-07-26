import React from 'react';
import { Parallax, Background } from 'react-parallax';
import three from './images/three.jpg'
const Example = () => {
    return(
        <div className='p-5 mt-5 mb-5' id='see'>
        <Parallax strength={250}>
        <div className='container mt-5' style={{height:'500px'}}>

        <ol className="carousel-indicators mb-5">
        <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
    </ol>
            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

            <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
                <div>
                <div className="card mb-2" style={{marginLeft:'20%',marginRight:'20%',height:'400px'}}>
                    <div className="card-body text-center">
                    <h5 className="card-title text-center"
        id="c1"
        >GUEST REVIEW
        <div className="mt-5 mb-5">
        <i className='fas fa-code' style={{fontSize:'36px'}}></i>
        </div>
        </h5>
                    <p className="card-text" id='c2'>Some quick example text to build on the card title and make up the bulk of the
                        card's content.Sed nibh orci, interdum in aliquet sed, interdum id turpis. Etiam eget bibendum ante, in rhoncus eros. Maecenas lacinia nibh sed ante vestibulum, vitae finibus velit finibus. Maecenas hendrerit, felis ac sollicitudin hendrerit, enim neque consectetur metus, sed congue sem turpis porta lectus. Quisque nunc lectus, cursus vel lorem non, tristique malesuada lacus. Ut sit amet auctor felis. Integer vitae imperdiet erat. Suspendisse dictum pharetra vulputate.</p>
            
                    </div>
                </div>
                </div>
            </div>
            
            <div className="carousel-item">
                <div>
                <div className="card mb-2" style={{marginLeft:'20%',marginRight:'20%',height:'400px'}}>
                    <div className="card-body text-center">
                    <h5 className="card-title text-center"
        id="c1"
        >GUEST REVIEW
        <div className="mt-5 mb-5">
        <i className='fas fa-code' style={{fontSize:'36px'}}></i>
        </div>
        </h5>
                    <p className="card-text" id='c2'>Etiam eu aliquet nisl, et fermentum massa. Nulla dui lorem, tincidunt nec feugiat eget, ultrices sit amet diam. Vestibulum in tellus luctus, egestas ipsum a, tempus quam. Sed eget rhoncus elit. Donec eu elit at neque placerat semper. Vestibulum id elit eros. Nulla facilisi. Suspendisse potenti. Ut elementum est scelerisque est placerat bibendum. Nunc volutpat elit at leo vehicula, a pulvinar eros laoreet. Quisque ornare porta blandit. Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
        
                    </div>
                </div>
                </div>
            </div>

            <div class="carousel-item">
                <div>
                <div class="card mb-2" style={{marginLeft:'20%',marginRight:'20%',height:'400px'}}>
                    <div class="card-body text-center">
                    <h5 className="card-title text-center"
        id="c1"
        >GUEST REVIEW
        <div className="mt-5 mb-5">
        <i className='fas fa-code' style={{fontSize:'36px'}}></i>
        </div>
        </h5>
                    <p class="card-text" id='c2'>Curabitur sed ligula accumsan, pretium ipsum id, ornare mi. Vivamus vestibulum placerat dolor sed faucibus. Vivamus pretium arcu sed est commodo fermentum. Nunc aliquam posuere sodales. Fusce non ante sapien. Fusce lorem libero, laoreet quis lectus eu, rutrum feugiat metus. In ac massa vitae justo lacinia sollicitudin quis non nulla. Nam luctus mi in convallis volutpat. Proin non orci vel sem vestibulum egestas sit amet nec nisl. Aenean ac metus vitae enim accumsan bibendum et non mi. Ut non dui sem. Cras viverra mollis imperdiet. In non odio ornare est rutrum maximus faucibus et mi. Sed ut ex rutrum, congue tellus ut, finibus lectus. Integer euismod lectus nulla, quis dignissim elit commodo ac. Fusce convallis sem non nibh tincidunt, vitae euismod nulla cursus. Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
           
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>

        <ol className="carousel-indicators mb-5">
            <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
            <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>
        
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

export default Example;