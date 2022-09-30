import React from 'react';
import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
  





function Card ({harborSightings}){






    class Card extends React.Component {
    render() {
      return(
          <div className="card ">
            <img src={this.props.sighting_img} />
            <div className="card-body">
              <h2>{this.props.nickname}</h2>
              <p>{this.props.location}</p>
			  <h5>{this.props.timestamp_of_sighting}</h5>
            </div>
          </div>
      )
    }
  }
    // console.log("Harbor page", harborSightings)
     const listItems  = harborSightings.map((element) => {


        
        //  console.log(element.nickname)
		
        return(
        <div>
       
			
			 <div className='cards'>
			   <Card
				sighting_img={element.sighting_img}
				nickname={element.nickname}
				timestamp_of_sighting={element.timestamp_of_sighting} 
                location={element.location}/>
            
            </div>
         </div> 
        )
  })




    return(
 <div> 
       

   <tbody>
        {listItems}
   </tbody>

</div> 
)}

export default Card