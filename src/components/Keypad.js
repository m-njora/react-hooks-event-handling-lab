// Code Keypad Component Here
import React from "react";

function Keypad (){
    //function that handles the event
    function handleInput(){
        //console.log(event)
        console.log("Entering password...")   
    }
    // then you reference the event on the event listener
    return (
        <div>       
        <input type="password" onChange={handleInput}/>    
        </div>
    )
}

export default Keypad;
