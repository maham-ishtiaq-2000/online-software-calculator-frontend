import React, { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {
  let [streetName , setStreetName] = useState("")
  let [streetNumber , setStreetNumber] = useState("")
  let [assessedValue , setAssessedValue] = useState("")
  let [conditionalRating , setConditionalRating] = useState("")
  const handleStreetNumber = (e) => {
    setStreetNumber(e.target.value)
  }
  const handleStreetName = (e) => {
    setStreetName(e.target.value)
  }
  const handleConditionalRating = (e) =>{
    setConditionalRating(e.target.value)
  }
  const submit = (event) => {
    event.preventDefault()
    console.log(streetName)
    console.log(streetNumber)
    console.log(conditionalRating)
    console.log("submitHandler")
    
    const link = "https://confused-dog-poncho.cyclic.app/home"
    axios.post(link,
        {
          streetNumber: streetNumber,
          streetName : streetName

        })
        .then((res) => {
            var receivedValue = res.data.data
            receivedValue = receivedValue.substring(1)
            receivedValue = Number(receivedValue.replace(/,/g, ''))
            if(conditionalRating == "1"){
              console.log(0.6 * assessedValue)
              console.log("from here")
              setAssessedValue(receivedValue * 0.6)
            }
            else if(conditionalRating == "2"){
              console.log("from here")
              console.log(0.8 * assessedValue)
              setAssessedValue(receivedValue * 0.8)
            }
            else{
              console.log(0.9 * assessedValue)
              setAssessedValue(receivedValue * 0.9)
            }
        })
  }
  
  console.log(assessedValue)
  return (
    <>
        <div>CALCULATOR</div>
        <form>
            <label>Enter street number : </label>
            <input type="text" onChange = {handleStreetNumber}></input>
            <br></br>
            <label>Enter street name : </label>
            <input type="text" onChange = {handleStreetName}></input>
            <br></br>
            <label for="cars">Choose Conditional Rating:</label>

              <select onChange={handleConditionalRating}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
        </form>
        <button onClick={submit}>submit</button>
        <p>assessedValue : {assessedValue}</p>
    </>
    
  );
};

export default App;
