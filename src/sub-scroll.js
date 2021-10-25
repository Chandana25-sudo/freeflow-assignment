import React, {Component} from 'react';



class Subscroll extends Component {
  constructor(props){
      super(props);
    this.state = {

    data: [
        {
            id:1,
            h : "It Employees",
            p : "Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution."
        },
        {
            id:2,
            h : "Gym",
            p : "Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution."
        },
        {
            id:3,
            h : "Yoga",
            p : "Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution."
        },
        {
            id:4,
            h : "Cycling",
            p : "Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution."
        }
    ]
  };
  }
    render() { 
        
        return (
            <div className="subscroll-component">
            
               {
                   this.state.data.map((a) => {
                       console.log(a.h);
                    (<div>{a.h}</div>);
                   })
               }
                
                
            </div>
        )
    }
    
    
    
    }
    
    export default Subscroll;