import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';
import twitterLogo from '../images/Twitter_Logo_Blue.svg';


function useSearchBadges(badges) {
   const [query, setQuery] = React.useState('');
   const [filteredBadges, setFilteredBadges] = React.useState(badges);

   React.useMemo(() => {
      const result = badges.filter(badge => {
         return `${badge.firstName} ${badge.lastName}`
         .toLowerCase()
         .includes(query.toLowerCase());
      });

      setFilteredBadges(result);
   }, [badges, query]);

   return { query, setQuery, filteredBadges};
}

function BadgesList(props) {
   const badges = props.badges;
   const {query, setQuery, filteredBadges} = useSearchBadges(badges);

   if(filteredBadges.length === 0) {
      return (
         <div>
            <div className="BadgeList">
            <div className="form-group">
               <label>Filter Badges</label>
               <input 
                  type="text"
                  className="form-control"
                  value={query}
                  onChange={e => {
                     setQuery(e.target.value);
                  }}
               />
            </div>
         </div>
            <h3>No badges found...</h3>
            <Link className="btn btn-primary" to="/badges/new" >
               create new badge!
            </Link>
         </div>
      )
   }

   return (
      <ul className="list-unstyled">
         <div className="BadgeList">
            <div className="form-group">
               <label>Filter Badges</label>
               <input 
                  type="text"
                  className="form-control"
                  value={query}
                  onChange={e => {
                     setQuery(e.target.value);
                  }}
               />
            </div>
         </div>
         {filteredBadges.map((badge) => {
            return (
               <li className="BadgeList__item" key={badge.id} >

                  <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                     <div className="BadgeList__item-avatar" >
                        <img className="BadgeList__item-avatar-img" src={badge.avatarUrl} alt="person"/>
                     </div>
                     
                     <div className="BadgeList__item-text" >
                        <div>
                           <p className="BadgeList__item-ptag" >{badge.firstName} {badge.lastName} </p>
                        </div>
                        <div className="BadgeList__item-twitter" >
                           {/* <span className="BadgeList__item-twitter" ></span> */} 
                           <img className="BadgeList__item-twitterLogo" src={twitterLogo} alt=""/> @{badge.twitter}
                        </div>
                        <div className="BadgeList__item-jobTitle" >
                           {badge.jobTitle}
                        </div>
                     </div>
                  </Link>

                  
               </li>
            )
         })}
      </ul>
   );
}

export default BadgesList;