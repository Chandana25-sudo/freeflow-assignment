import React, {Component} from 'react';
// import React from "react";
import Login from '../pages/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MDBIcon, MDBContainer } from 'mdbreact';

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
                    <p className="connect">Connect</p>
                    {/* <p>With Us</p> */}
                <div className = "share-btn">
                {/* <h9 class="writing-mode-hack description">connect with us</h9> */}
                    <div className="facebook-icon">
                     <img src="https://www.cynchconstructions.com/facebook.png"/>
                    </div>
                    <div className="facebook-icon">
                     <img src="https://www.cynchconstructions.com/twitter.png"/>
                    </div>
                   
                    
                </div>

                </div>
                {/* <img src="../assests/Group 191.svg"/> */}
                
            </div>
        )
    }
    
    
    
    }
    
    export default Icons;