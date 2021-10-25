import React, {Component} from 'react';
// import Button from 'bootstrap';
import SidebarExample from './routing'
import HomepageComponent from './homepage';

class Icons extends Component {

    render() {
        return (
            <div className="icons-component">
                <img src="https://image.shutterstock.com/image-vector/logo-d…-template-coding-programming-260nw-1516243898.jpg" width ="78px"/>
                {/* <h2>Logo</h2> */}
                <div class="img">
                    <img src="	https://www.cynchconstructions.com/Group%20116.svg"/>
                </div>    
                <div class="img">
                    <img src="	https://www.cynchconstructions.com/Group%20116.svg"/>
                </div>  
                <div class="img">
                    <img src="	https://www.cynchconstructions.com/Group%20116.svg"/>
                </div>  
                {/* <img src="../assests/Group 191.svg"/> */}
                <SidebarExample/>
            </div>
        )
    }
    
    
    
    }
    
    export default Icons;