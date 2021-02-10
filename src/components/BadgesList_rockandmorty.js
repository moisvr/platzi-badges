import React from 'react';
import './styles/BadgesList.css';
import twitterLogo from '../images/Twitter_Logo_Blue.svg';

class BadgesList extends React.Component {
   render() {
      console.log("BadgesList");
      console.log(this.props.badges.results);

      if(this.props.badges.error){
         return `Error: ${this.props.badges.error}`
      };
      return (
         // <div>xd</div>
         <ul className="list-unstyled">
            {this.props.badges.results.map((badge) => {
               return (
                  <li className="BadgeList__item" key={badge.id} >
                     <div className="BadgeList__item-avatar" >
                        <img className="BadgeList__item-avatar-img" src={badge.image} alt="person"/>
                     </div>
                     
                     <div className="BadgeList__item-text" >
                        <div>
                           <p className="BadgeList__item-ptag" >{badge.name} </p>
                        </div>
                        <div className="BadgeList__item-twitter" >
                           {/* <span className="BadgeList__item-twitter" ></span> */} 
                           <img className="BadgeList__item-twitterLogo" src={twitterLogo} alt=""/> @{badge.name}
                        </div>
                        <div className="BadgeList__item-jobTitle" >
                           {badge.species} - {badge.location.name}
                        </div>
                     </div>                     
                  </li>
               )
            })}
         </ul>
      );
   }
}

export default BadgesList;