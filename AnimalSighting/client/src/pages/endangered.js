import React from 'react';
import {useState, useEffect} from 'react';
import "../App.css";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplaySpecies from '../components/DisplaySpecies';
import Footer from '../components/footer';

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
  
	  

	  


return (
	<div className=''>
	<h1>Learn About Endangered Species </h1>
<div className='parent'>
	<div class="header text">
		<h3>If the particular species of animals declining continuously at 25% for three years or more it is an endangered species. * If the population of particular species is less than 50 Individuals it is identified as an endangered species.</h3>	  
			 </div>
			 <div className='child'>
	<DisplaySpecies speciesList={speciesList} />
     
            </div>
      
	  </div >
	  <Footer />
</div>

);
};

export default Endangered;
