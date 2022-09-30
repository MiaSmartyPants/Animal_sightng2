import React from 'react';
import AddSighting from '../components/AddSighting';
import AddSpecies from '../components/AddSpecies';
import Endangered from './endangered';

const Forms = () => {

	
return (
	<div className='text'>
	<h2>Submit a Species to the Endangered List</h2>
		<AddSpecies   />

		<h2>Share your sighting of one of our Animals</h2>
		<AddSighting />
	</div>
);
};

export default Forms;
