import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/Navbar.css";
// import logo2 from '../images/cosmo-con.jpg';
import logo2 from '../images/badge-header.svg';

class Navbar extends React.Component {
   render() {
      return (
         <div className="Navbar">
            <div className="container-fluid">
               <Link className="Navbar__brand" to="/">
                  <img className="Navbar__brand-logo" src={logo2} alt=""/>
                  <span className="font-weight-light" >Cosmo</span>
                  <span className="font-weight-bold" >Con</span>
               </Link>
            </div>            
         </div>
         
      );
   }
}

export default Navbar;