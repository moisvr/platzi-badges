import React from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import './styles/Badges.css';

class Badges extends React.Component {   

   constructor(props) {
      super(props);
      this.state = {
         nextPage: 1,
         loading: true,
         error: null,
         data: {            
            results: []
         }
      };
   }

   fetchCharacters = async () => {
      this.setState({
         loading: true,
         error: null
      });

      try{
         const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
         const data = await response.json();
         this.setState({
            loading: false,
            // data: data,
            data: {
               info: data.info,
               results: [].concat( this.state.data.results, data.results)
            },
            nextPage: this.state.nextPage + 1
         })
      }catch(error){
         this.setState({
            loading: false,
            error: error
         })
      }
      
      console.log("fetchCharacters()");
      console.log(this.state.data);
   }

   componentDidMount() {
      this.fetchCharacters();
   }

   componentDidUpdate(prevProps, prevState){
   }

   componentWillUnmount() {
   }

   render() {
      return (
         <React.Fragment>
            <div className="Badges">
               <div className="Badges__hero">
                  <div className="Badges__container">
                     <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                  </div>
               </div>
            </div>

            <div className="Badges__container">
               <div className="Badges__buttons">
                  <Link to="/badges/new" className="btn btn-primary">
                     New Badge
                  </Link>
               </div>

               <div className="Badges__list">
                  <div className="Badges__container">
                     <BadgesList badges={this.state.data} />
                  </div>

                  {this.state.loading && (
                     <h1>Loading...</h1>
                  )}

                  {!this.state.loading && (
                     <button className="btn btn-success" onClick={() => this.fetchCharacters()} >Load more!</button>
                  )}

               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Badges;