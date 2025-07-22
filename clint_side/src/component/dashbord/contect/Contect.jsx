import React from "react";
import "./Contect.css"
import { useState } from "react";
import axios from "axios";

function Contect() {
        const [change,setChange] = useState({name:"",email:"",message:""});

    const handleChange =(e)=>
    {
        setChange({...change,[e.target.name]: e.target.value});
    }

    const handleSubmit=async(e)=>
    {
        try
        {
            await axios.post("http://localhost:3000/api/contect",change);
            alert("message send succusfully");
            setChange({name:"",email:"",message:""});
        }

        catch(error)
        {
            console.log("error from contect page ",error);

        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <input placeholder="NAME" name="name" type="text" onChange={handleChange}/>
            <input type="text" name="email" placeholder="email id" onChange={handleChange} />
            <textarea type="text" name="message" placeholder="your-message" onChange={handleChange}/>
            <button type="submit">send</button>
        </form>
    )
}
export default Contect;