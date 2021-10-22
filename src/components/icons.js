import React, {Component} from 'react';
// import React from "react";
import Login from '../pages/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Icons extends Component {

    render() {
        return (
            <div className="icons-component">
                <div className="icons">
                        <img src="https://image.shutterstock.com/image-vector/logo-d…-template-coding-programming-260nw-1516243898.jpg" width ="78px"/>
                        {/* <h2>Logo</h2> */}
                        <div class="img">
                            <img src="	https://www.cynchconstructions.com/Group%20116.svg"/>
                            <p>Home</p>
                        </div>    
                        <div class="img">
                            <img src="	https://www.cynchconstructions.com/Group%20116.svg"/>
                            <p>About Us</p>
                        </div>  
                        <div class="img">
                            <img src="	https://www.cynchconstructions.com/Group%20116.svg"/>
                            <p>Services</p>
                        </div>  
                 </div>
                <div className="login-btn">
                  <Link to='/login'><a href="/login" class="btn btn-primary">Login</a></Link>
                </div>

                <div>
                <i class="fab fa-twitter"></i>

                </div>
                {/* <img src="../assests/Group 191.svg"/> */}
                
            </div>
        )
    }
    
    
    
    }
    
    export default Icons;