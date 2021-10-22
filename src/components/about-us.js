import React, {Component} from 'react';
class Aboutus extends Component {

    render() {
        return (
            <div className="aboutus-component">
                 <h2>What we Offer</h2>
                 <div className="shadow p-3 mb-5 bg-white rounded" id="card-shadow">
                    <div className="card">
                    
                        <div className="card-body">
                            <h5 className="card-title">Special Yoga Training</h5>
                            <p className="card-text">Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution.</p>
                            {/* <a href="#" className="btn btn-primary">Signup</a> */}
                        </div>
                    </div>
                 </div>  
                 <div className="shadow p-3 mb-5 bg-white rounded" id="card-shadow">
                        <div class="card">
                            <div class="card-header">
                                Featured Offers
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Jogging</h5>
                                <h5 class="card-title">Cycling</h5>
                               
                                
                                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Signup</a> */}
                            </div>
                        </div>
                </div>
                
            </div>
        )
    }
    
    
    
    }
    
    export default Aboutus;