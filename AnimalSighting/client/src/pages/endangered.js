import React from 'react';
import {useState, useEffect} from 'react';
import "../App.css";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplaySpecies from '../components/DisplaySpecies';

const Endangered = () => {

	const [speciesList, setSpeciesList] = useState();

	async function getData() {
	  await fetch("http://localhost:5050/specieslist")
	  
	  //return the response
		.then((response) => response)
		.then((data) => {
		  return data.json();
		})
		.then((data)=> {
		  console.log("data", data)
		  setSpeciesList(data)
		  
			//   let displayEvent = data[0];
		//  console.log(displayEvent)
		  
	
		})
	 } 
	   
	   useEffect(() => {
		// CALL here
		 getData() 
	 
	   },[])
	if(!speciesList)
		return null;
  
	  
	// 	// key={index}
    // console.log(element.commonname); // 100, 200, 300
     
	//  console.log(index); // 0, 1, 2
    // console.log(array); // same myArray object 3 times
	// return <p>{element.commonname}</p>
        
    //   });
  
	  


return (
	<div>
	<h1>Learn About Endangered Species </h1>
	<div class="header">
		<h3>If the particular species of animals declining continuously at 25% for three years or more it is an endangered species. * If the population of particular species is less than 50 Individuals it is identified as an endangered species.</h3>	  
			 </div>
	<DisplaySpecies speciesList={speciesList} />
     
            
      
	  
</div>

);
};

export default Endangered;
