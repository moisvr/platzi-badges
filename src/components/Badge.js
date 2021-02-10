import React from 'react';
import md5 from 'md5';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
   render () {
      const email = this.props.email;
      const hash = md5(email);

      return (
         <div className="Badge" >
            <div className="Badge__header" >
               <img src={confLogo} alt="Logo de la a conferencia"/>
            </div>

            <div className="Badge__section-name" >
               <Gravatar 
                  className="Badge__avatar"
                  // email={this.props.email}
                  email={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
                  alt="Avatar"
                  onChange={this.props.onChange}
                  // onChange={console.log(`https://www.gravatar.com/avatar/${hash}?d=identicon`)}
                  name="avatarURL"
                  value={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
               />
               <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info" >
               <h3>{this.props.jobTitle}</h3>
               <div>@{this.props.twitter}</div>
            </div>

            <div className="Badge__footer" >
               <p>#platziconf</p>
            </div>
         </div>
      );
   }
}
// https://www.gravatar.com/avatar?d=identicon
export default Badge;