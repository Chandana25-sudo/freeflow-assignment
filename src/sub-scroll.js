import React, {Component} from 'react';



const Subscroll = () => {
 
    

    const data = [
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
  
  
   
        
        return (
            <div className="subscroll-component">
            
               {
                   data.map((a) => (
                    
                    <div>
                        <h1>{a.h}</h1>
                        <p>{a.p}</p>
                    </div>
        ))
               }
                
                
            </div>
        )
    
    
    
    
    }
    
    export default Subscroll;