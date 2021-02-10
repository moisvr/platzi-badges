import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import confLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

class Home extends Component {
   render() {
      return (
         <div className="container-fluid Home" >
            <div className="row">
               <div className="col-12 col-md-5 Home__left">
                  <div className="">
                     <img className="Home__left-img" src={confLogo} alt=""/>
                     <div className="Home__left-text center-block">
                        <h1>PRINT YOUR BADGES</h1>
                        <p>The easiest way to manage your conference</p>
                        <div className="Home__left-button-wrapper">
                           <Link to="Badges" className="btn btn-primary Home__left-button">Start now</Link>
                           <div>
                           <Link to="lostinheaven" className="btn btn-danger Home__left-button-lost">Get Lost (?)</Link>
                           </div>
                           
                        </div>                        
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-7">
                  <img className="Home__right-image" src={astronauts} alt="" />
               </div>
            </div>            
         </div>
      );
   }
}

export default Home;