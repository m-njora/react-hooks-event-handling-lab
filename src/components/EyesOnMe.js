// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe (){
    function FriendFocus(){
        console.log('Good!')
    }
    function FriendBlur(){
        console.log('Hey! Eyes on me!')
    }
    return (
        <div>
            <button onFocus={FriendFocus} onBlur={FriendBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;