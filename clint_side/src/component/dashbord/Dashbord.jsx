import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dash.css";

function Dashbord() {
    return (
        <>
            <div className="layout">
                <div className="sidebar">
                    <img src=" /kedarnath-temple-people.jpg" alt="just profjinle" className="profilepic"/>
                    <br />
                    <Link to={"home"} className="hed" > HOME </Link>
                    <br />
                    <Link to={"about"} className="hed" >ABOUT</Link>
                    <br />
                    <a className="hed" href="https://www.github.com/sridhar-hp" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <br />
                    <a className="hed" href="https://www.linkedin.com/in/sridhark3773" target="_blank" rel="noopener noreferrer"> LINKEDIN </a>
                    <br />
                    <a className="hed" href="https://leetcode.com/progress/" target="_blank" rel="noopener noreferrer">LeetCode</a>
                    <br />
                    <Link to={"project"} className="hed"> PROJECTS </Link>
                    <br />
                    <a className="hed" href="https://www.instagram.com/sridhar.k3773" target="_blank" rel="noopeneer noreferrer">INSTAGRAM</a>
                    <br />
                    <Link to={"contect"} className="hed"> CONTECT</Link>
                    <br />
                    
                </div>
                <div className="main-content">
                    <Outlet />
                </div>

            </div>
        </>
    );
}
export default Dashbord;