import React from 'react';
import DisplayHarbor from '../components/DisplayHarbor';
import DisplayDaisy from '../components/DisplayDaisy';
import Card from '../components/Card';
import {useState, useEffect} from 'react';
import Footer from '../components/footer';

const Sighting = () => {


	const [harborSightings, setHarbor] = useState();
	const [DaisySightings, setDaisy] = useState();

	async function getData() {
	  await fetch("http://localhost:5050/sightings")
	  
	  //return the response
		.then((response) => response)
		.then((data) => {
		  return data.json();
		})
		.then((data)=> {
		//   console.log("data", data)
		  setHarbor(data.filter(element => element.nickname === 'Duke'))
		  setDaisy(data.filter(element => element.nickname === 'Daisy'))
		  
		// 	  let displayEvent = data[0];
		//  console.log(displayEvent)
		  
	
		})
	 } 

	   
	   useEffect(() => {
		// CALL here
		 getData() 
	 
	   },[])
	if(!harborSightings)
		return null;
  


return (
	<div className='text'>
	<h1>Meet the Animals</h1>
	<br></br>
	<h3>The Ospreys</h3>
	<div className='parent'>
	<b><p  style={{backgroundColor: "#185dcc"}}>The osprey  (Pandion haliaetus), also called sea hawk, river hawk, and fish hawk, is a diurnal, fish-eating bird of prey with a cosmopolitan range.
	The osprey tolerates a wide variety of habitats, nesting in any location near a body of water providing an adequate food supply. It is found on all continents except Antarctica, although in South America it occurs only as a non-breeding migrant.
	</p></b>
	<div className='child'>
	<h3>Harbor</h3>
	<DisplayHarbor />
	

	<h3>Duke</h3>
	<Card harborSightings={harborSightings}/>
	
	<h3>Daisy</h3>
	< DisplayDaisy DaisySightings={DaisySightings} />
	</div></div>

	<Footer />
	</div>
);
};

export default Sighting;
