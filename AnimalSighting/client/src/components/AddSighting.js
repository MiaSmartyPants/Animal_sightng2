import {useState, useEffect} from 'react';
import "../App.css";
import react from "react";

 


function AddSighting() {
  const [sightingsList, setSightingsList] = useState('');

    const [nickname, setNickname] = useState('');
    const updateNickname= (e) => {
        setNickname(e.target.value);
     
   };
   const [location, setLocation] = useState();
    const updateLocation = (e) => {
        setLocation(e.target.value);
     
   };
   const [timeStamp, setTimeStamp] = useState();
    const updateTimeStamp = (e) => {
        setTimeStamp(e.target.value);
     
   };
   const [img, setImg] = useState();
    const updateImg = (e) => {
        setImg(e.target.value);
     
   };
   async function getData() {
    await fetch("http://localhost:5050/sightings")
    
    //return the response
      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data)=> {
        console.log("data", data)
        setSightingsList(data)
        
          //   let displayEvent = data[0];
      //  console.log(displayEvent)
        
  
      })
   } 

     function addToSighting(e){
       
      fetch('http://localhost:5050/sightings', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({nickname,timeStamp,location,  img}),
     })
       .then(response => {
         return response.text();
       })
       .then(data => {
          console.log(data)
          getData(); // call getData(), import it and pass data to this page
        })
        .catch((error) => {
         console.error('Error:', error);
      });
   }

    


    return(

<section>
<div className='parent'>
 <form id="add-sighting" action="#"
 onSubmit={addToSighting}
>
  <fieldset>
    <label>Nickname</label>
    <input
      type="text"
      id="add-nickname" placeholder='Daisy'
       onChange={updateNickname}
    /><br></br>
    <label>Location</label>
    <input
      type="text"
       onChange={updateLocation}/>
       <br></br>
 <label>TimeStamp</label>
    <input
      type="date"
       onChange={updateTimeStamp}/>

<br></br>
    <label>Image URL</label>
    <input
      type="text"
       onChange={updateImg}/>
  </fieldset>
  <input type="submit" 
/>

</form >
</div>
</section>

    )
}

export default AddSighting