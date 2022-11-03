
import React, { useState } from "react";

function SignUp(){
    const [signUpData, setSignUpData ]= useState( {
        email : "",
        password : "",
        confirmpassword:"",
        checked : false ,
    });

    function handleChange (event ){
        setSignUpData (prevState=>{
            return {
                ...prevState ,
                [event.target.name]:event.target.type === "checkbox" ? event.target.checked : event.target.value ,
            }
        } );
    }
    
    function  handleSubmit (event ) {
        event.preventDefault()
        if (signUpData.confirmpassword === signUpData.password){
            console.log("succes")
        }
        else {
            console.log ("not the same ")
        }

        if( signUpData.checked){
            console.log("join newsletter")
        }
      }

    return (
        <div className="bg-purple-800 h-screen p-20 px-40 ">
            <form className=" flex  flex-col p-10 w-1/2 m-auto  bg-white rounded-xl " onSubmit={handleSubmit}>
                <input className=" border p-4  m-10 rounded-lg focus:outline-none focus:border-sky-500" 
                placeholder="E-mail"
                type="email" 
                value ={signUpData.email}
                name="email"
                onChange={handleChange}
                />

<input className="border p-4   rounded-lg m-10 focus:outline-none focus:border-sky-500" 
                placeholder="Password"
                type="password" 
                value ={signUpData.password}
                name="password"
                onChange={handleChange}
                />

<input className="border p-4  m-10 rounded-lg focus:outline-none focus:border-sky-500" 
                placeholder="Confirm password"
                type="password" 
                value ={signUpData.confirmpassword}
                name="confirmpassword"
                onChange={handleChange}
                />

<div>
    <input className="border p-4  m-10 focus:outline-none focus:border-sky-500"
    type="checkbox"
    id="okayToEmail"
    name="checked"
    checked ={signUpData.checked}
    onChange={handleChange}
    />
    <label htmlFor="okayToEmail">I want to join the newsletter</label>
</div>
<button className="bg-purple-800 text-white p-4 w-1/2 mx-auto rounded-xl">
Sign Up 
</button>
            </form>
        </div>
    );
} 

export default SignUp