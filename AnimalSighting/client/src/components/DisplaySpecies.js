import React from 'react';
import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
  





function DisplaySpecies ({speciesList}){




    class Card extends React.Component {
    render() {
      return(

          <div className="card ">
            <img src={this.props.img} />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>{this.props.conservationstatus}</p>
            </div>
          </div>
      )
    }
  }
    console.log("endangered page", speciesList)
     const listItems  = speciesList.map((element) => {


        
         console.log(element.commonname)
        return(
        <div>
       
			
			 <div className='cards '>
			   <Card
				img={element.endangered_img}
				title={element.commonname}
				author={element.estimatedpopulation} 
                conservationstatus={element.conservationstatus}/>
            
            </div>
         </div> 
        )
   })




    return(
 <div className='text'> 
       

   <tbody>
        {listItems}
   </tbody>

</div> 
)}

export default DisplaySpecies