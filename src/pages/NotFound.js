import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
// import astronauts from '../images/astronauts.svg';
import lostBro from '../images/Lost-bro.svg';

class NotFound extends Component {
   render() {
      return (
         <div className="container-fluid Home" >
            <div className="row">
               <div className="col-12 col-md-5 Home__left">
                  <div className="">
                     {/* <img className="Home__left-img" src={confLogo} alt="" srcset=""/> */}
                     <div className="Home__left-text center-block">
                        <p className="NotFound__left-title text-right">ERROR 404</p>
                        <p className="text-right" >The page you are looking for was not found on the server</p>
                        <div className="NotFound__left-button-wrapper">
                           <a className="btn btn-primary" href="https://storyset.com/illustration/lost/bro" >
                              source of the illustration at the right
                           </a>                           
                        </div>
                        <div className="NotFound__left-button-wrapper-home">
                           <Link to="/" className="btn btn-info text-right">Go back home</Link>                        
                        </div>                        
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-7">
                  <img className="NotFound__right-image" src={lostBro} alt="" srcset=""/>                  
               </div>
            </div>
         </div>
      );
   }
}

export default NotFound;