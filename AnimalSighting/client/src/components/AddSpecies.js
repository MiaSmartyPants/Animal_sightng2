import {useState, useEffect} from 'react';
import "../App.css";
import react from "react";


function AddSpecies({getData}) {
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
         


    const [commonname, setCommonName] = useState('');
    const updateCommonName = (e) => {
        setCommonName(e.target.value);
     console.log(commonname)
   };
   const [estimatedpopulation, setEstimatedPopulation] = useState();
    const updateEstimatedPopulation = (e) => {
        setEstimatedPopulation(e.target.value);
     console.log(estimatedpopulation)
   };

    function addToEndangered() {
      console.log(commonname)
      console.log(estimatedpopulation)
     fetch('http://localhost:5050/specieslist', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({commonname,estimatedpopulation}),
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
<div>
 <form id="add-event" action="#"
 onSubmit={addToEndangered}
>
  <fieldset>
    <label>Common Name</label>
    <input
      type="text"
      id="add-event-name" placeholder='tiger'
       onChange={updateCommonName}
    /><br></br>
    <label>Estimated Population</label>
    <input
      type="number"
      id="add-event-name"
       onChange={updateEstimatedPopulation}/>
  </fieldset>
  <input type="submit" 
/>
</form >
</div>
</section>
)}

export default AddSpecies;