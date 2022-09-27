import React from "react";
import ReactPlayer from 'react-player/youtube'
import Endangered from './endangered';
import '../App.css';
	
const About = () => {
return (
	<div>
    	<ReactPlayer url='https://www.youtube.com/watch?v=_WLcGRMNj0U' playing={true} width={1040} controls={false}/>

	<h1>
		About Endangered Species
	</h1>
	<p>The Endangered Species Act (ESA) delivers remarkable successes. Looking back on the law's 45-year history, we recognize that it has helped stabilize populations of species at risk, prevent the extinction of many others, and conserve the habitats upon which they depend. All Americans can take pride in the fact that, under the ESA, the California condor, grizzly bear, Okaloosa darter, whooping crane, and black-footed ferret have all been brought back from the brink of extinction. We can also celebrate that many other species no longer need ESA protection and have been removed from the list of endangered and threatened species, including the bald eagle—the very symbol of our nation's strength.</p>
	<div  >
		Endangered  Species See More
		<br></br>
	<a href="endangered.js">
		<img className="panda" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/1200px-Red_Panda_%2824986761703%29.jpg" width={300} />
	</a>
	</div>
	<div className="bird" >
		Sightings See More
		<br></br>
	<a href="sighting.js">
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLXtOViaU7yMyYsCprlpltDGXfnwY9ltL7A&usqp=CAU" width={300} />
	</a>
	</div>
	
	</div>
);
};

export default About;
