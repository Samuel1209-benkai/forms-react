import React, {useState } from "react";

function Forms (){

     const  [ formsData , setFormData]= useState({
        firstName :"",
        lastName : "",
        email : "" ,
        favColor : "",
     });

     console.log(formsData.favColor);
    function  changed(event){
        setFormData (prevState =>{
            return {
                ...prevState,
                [event.target.name] : event.target.value ,
            }
        })
     }
     function submeted(event){
        event.preventDefaulte();
        // submitToApi( formsData)
        console.log(formsData)
     }
    return(<div>
        <form onSubmit={submeted}>
            <input  className=" border border-black m-4 p-3 rounded "
            type="text"
            placeholder="FirstName"
            onChange={changed}
            name="firstName" 
            value={formsData.firstName}
            />

<input  className=" border border-black m-4 p-3 rounded "
            type="text"
            placeholder="LastName"
            onChange={changed}
            name="lastName" 
            value={formsData.lastName}
            />

<input  className=" border border-black m-4 p-3 rounded "
            type="email"
            placeholder="email"
            onChange={changed}
            name="email" 
            value={formsData.email}
            />
<br/>

<label className="m-4" htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select className="m-4"
            id="favColor"
            value={FormData.favColor}
            onChange={changed}
            name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option selected value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <button type="Submit" className="border m-4 p-1  px-3  bg-blue-600  text-white rounded-md " > Submit</button>
        </form>
    </div>);
}


export default Forms