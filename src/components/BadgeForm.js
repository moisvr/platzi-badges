import React, { Component } from 'react';

class BadgeForm extends Component {

   // handleSubmit = e => {
   //    e.preventDefault(); //Para que no haga un reload page
   //    console.log("Form was submitted, dudeeee");
   //    console.log(this.props.formValues);
   // }

   render() {
      console.log(this.props.error);
      return (
         <div>
            <form onSubmit={this.props.onSubmit} >
               <div className="form-group">
                  <label>First Name</label>
                  <input 
                     onChange={this.props.onChange} 
                     className="form-control" 
                     type="text" 
                     name="firstName"
                     value={this.props.formValues.firstName}
                  />                  
               </div>

               <div className="form-group">
                  <label >Last Name</label>
                  <input 
                     onChange={this.props.onChange}
                     className="form-control" 
                     type="text" 
                     name="lastName"
                     value={this.props.formValues.lastName}
                  />                  
               </div>

               <div className="form-group">
                  <label >Email</label>
                  <input 
                     onChange={this.props.onChange}
                     className="form-control" 
                     type="email" 
                     name="email"
                     value={this.props.formValues.email}
                  />
               </div>

               <div className="form-group">
                  <label >Job title</label>
                  <input 
                     onChange={this.props.onChange}
                     className="form-control" 
                     type="text" 
                     name="jobTitle"
                     value={this.props.formValues.jobTitle}
                  />   
               </div>

               <div className="form-group">
                  <label >Twitter</label>
                  <input 
                     onChange={this.props.onChange}
                     className="form-control" 
                     type="text" 
                     name="twitter"
                     value={this.props.formValues.twitter}
                  />                  
               </div>
               {/* Por default, el tipo de boton que es un button es 'submit' */}
               <button className="btn btn-primary" >Save</button>

               {this.props.error && (
                  <p className="text-danger" >{this.props.error.message}</p>
               )}
            </form>
         </div>
      );
   }
}

export default BadgeForm;