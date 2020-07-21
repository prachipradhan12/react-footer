import React, { Component } from 'react';
import logo from './logo.svg';
import leftpic from './three-wooden-signage-in-a-tree-close-up-photography-2562560.jpg';
import contact from './contact'
import SocialFollow from './SocialFollow';
// import './App.css';

class App extends Component{
  render() {
    return (

      <div className="container-fluid">
               <div className="row">
        <div className="col-sm-6"> 
<img src={leftpic} alt="Logo" className="responsive" />
</div>
<div className="col-sm-6" > 
      
           <p>Contact Us</p>
<SocialFollow />
      <div>
      

      <form action="/action_page.php">
      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
  
  
      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" />
  
  
      <label>Subject</label>
      <textarea id="subject" type="textarea" name="subject" placeholder="Write something.."></textarea>
      <center><input type="submit" value="Submit" /></center>
      <p> &copy; 2020 by Youth India Foundation. </p>

      </form>
      </div>
      </div>
      </div>
 
 
 
 
  
 
       </div>
 
      
         );
  }
  
 }

export default App;
