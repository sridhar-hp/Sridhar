import React from "react";
import "./Contect.css"
import { useState } from "react";
import axios from "axios";

function Contect() {

    const handleChange =()=>
    {
        const [change,setChange] = useState()
            
        

    }

    const handleSubmit=(e)=>
    {

    }


    return (

        <form onSubmit={handleSubmit}>
            <input placeholder="NAME" type="text" onChange={handleChange}/>
            <input type="text" placeholder="email id" onChange={handleChange} />
            <textarea type="text" placeholder="your-message" onChange={handleChange}/>
            <button type="submit">send</button>
        </form>
    )
}
export default Contect;