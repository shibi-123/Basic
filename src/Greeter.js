import React from 'react';

function Greeter({name,age = 8, excitement}){
    const greet = () =>{
            alert(`HELLO THERE!! ${name}`)
    }
    return (
        <>
            <h1>Hi, there {name}{"!".repeat(excitement)}  </h1>
            <p>Your Age: {age} </p>
            <button onMouseOver={(greet)}>Click ME!</button>
        </>
    )
}



export default Greeter;