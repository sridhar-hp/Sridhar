import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dash.css";

function Dashbord() {
    return (
        <>
            <div className="layout">
                <div className="navebar">
                    
                    <Link to={"home"} className="hed" > HOME </Link>
                    <Link to={"about"} className="hed" >ABOUT</Link>
                        <Link to={"project"} className="hed"> PROJECTS </Link>
                        <Link to={"contect"} className="hed"> CONTECT</Link>

                    <a className="logo" href="https://www.github.com/sridhar-hp" target="_blank" rel="noopener noreferrer"><img className="git" src="/public/Github.png" alt="githun-logo" /></a>
                    
                    <a className="logo" href="https://www.linkedin.com/in/sridhark3773" target="_blank" rel="noopener noreferrer"><img  src="/public/Linkedin.png" alt="" /></a>
                    
                    <a className="logo" href="https://leetcode.com/progress/" target="_blank" rel="noopener noreferrer"><img src="/public/leetCode-logo.png" alt="" /></a>
                    
                    <a className="logo" href="https://www.instagram.com/sridhar.k3773" target="_blank" rel="noopeneer noreferrer"><img src="/public/insta.gif" alt="" /></a>                
                     
                    <img src="/public/sridhar.jpg" alt="just profjinle" className="profilepic"/>
                    
                </div>
                <div className="main-content">
                    <Outlet />
                </div>

            </div>
        </>
    );
}
export default Dashbord;