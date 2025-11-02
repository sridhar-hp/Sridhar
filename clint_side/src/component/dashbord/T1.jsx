import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import { TypeAnimation } from 'react-type-animation';
import axios from "axios";

// import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style1.css";

function T1() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/contect", formData);
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message: ", error);
        }
    };

    // Smooth scrolling function
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="layout">
            {/* NAVBAR */}
            <nav className="navbar">
                <h2 className="logo">Sridhar<span>K</span></h2>
                <div className="nav-links">
                    <button onClick={() => scrollToSection("home")}>Home</button>
                    <button onClick={() => scrollToSection("about")}>About</button>
                    <button onClick={() => scrollToSection("projects")}>Projects</button>
                    <button onClick={() => scrollToSection("contact")}>Contact</button>
                </div>
                <div className="socials">
                    <a href="https://github.com/sridhar-hp" target="_blank" rel="noreferrer">
                        <img src="/public/Github.png" alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com/in/sridhark3773" target="_blank" rel="noreferrer">
                        <img src="/public/Linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://leetcode.com/progress/" target="_blank" rel="noreferrer">
                        <img src="/public/leetCode-logo.png" alt="LeetCode" />
                    </a>
                    <a href="https://instagram.com/sridhar.k3773" target="_blank" rel="noreferrer">
                        <img src="/public/insta.gif" alt="Instagram" />
                    </a>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="main-content">
                {/* HOME SECTION */}
                <section id="home" className="section home" data-aos="fade-up">
                    <img src="/public/sridhar.jpg" alt="Profile" className="profile-pic" />
                    <h3>Hello, I’m</h3>
                    <h1>
                        {/* <Typed
              strings={[
                "Sridhar K 👨‍💻",
                "A Passionate Web Developer 💻",
                "A Problem Solver 🧩",
                "A Lifelong Learner 🚀",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            /> */}
{/* 
                        <ReactTyped
                            strings={["Hello!", "I'm Sridhar"]}
                            typeSpeed={50}
                            backSpeed={30}
                            loop
                        /> */}

                        <TypeAnimation
  sequence={['Hello!', 2000, 'I am Sridhar.', 2000, 'A Web Developer.', 2000]}
  wrapper="h1"
  cursor={true}
  repeat={Infinity}
/>

                    </h1>
                    <p>
                        I build clean, user-friendly, and dynamic web experiences using modern web technologies.
                    </p>
                </section>

                {/* ABOUT SECTION */}
                <section id="about" className="section about" data-aos="zoom-in">
                    <h2>About Me</h2>
                    <p>
                        I’m a self-motivated web developer with a strong foundation in React, Node.js, and
                        responsive UI design. My mission is to create fast, beautiful, and accessible web apps
                        that make a difference.
                    </p>
                </section>

                {/* PROJECTS SECTION */}
                <section id="projects" className="section projects" data-aos="zoom-in-up">
                    <h2>Projects</h2>
                    <p>🚧 Projects uploading soon... Stay tuned!</p>
                </section>

                {/* CONTACT SECTION */}
                <section id="contact" className="section contact" data-aos="fade-up">
                    <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default T1;
