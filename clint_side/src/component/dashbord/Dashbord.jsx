import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dash.css";

function Dashbord() {
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
        <>
            <div className="layout">
                <div className="navebar">

                    <Link to={""} className="hed" > HOME </Link>
                    <Link to={""} className="hed" >ABOUT</Link>
                    <Link to={""} className="hed"> PROJECTS </Link>
                    <Link to={""} className="hed"> CONTECT</Link>

                    <a className="logo1" href="https://www.github.com/sridhar-hp" target="_blank" rel="noopener noreferrer"><img className="git" src="/public/Github.png" alt="githun-logo" /></a>

                    <a className="logo2" href="https://www.linkedin.com/in/sridhark3773" target="_blank" rel="noopener noreferrer"><img src="/public/Linkedin.png" alt="" /></a>

                    <a className="logo3" href="https://leetcode.com/progress/" target="_blank" rel="noopener noreferrer"><img src="/public/leetCode-logo.png" alt="" /></a>

                    <a className="logo4" href="https://www.instagram.com/sridhar.k3773" target="_blank" rel="noopeneer noreferrer"><img src="/public/insta.gif" alt="" /></a>

                    <img src="/public/sridhar.jpg" alt="just profjinle" className="profilepic" />

                </div>

                <div className="main-content">
                    <div className="homepf">
                        <h3>hello i am Sridhar k</h3>
                        <p className="typing">Hi, I'm Sridhar K — a passionate and curious web developer with a strong interest in building clean, user-friendly websites and applications. Welcome to my portfolio! Here, you’ll find insights into who I am, the technologies I work with, and the projects I’ve built. I believe in continuous learning and using technology to solve real-world problems. Let’s connect and create something great together.
                        </p>
                    </div>

                    <div className="aboutpf">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptate dolorum perferendis optio quaerat. Consequatur laudantium necessitatibus dolor asperiores, itaque odit deleniti laborum quod dolorem provident, omnis dicta tenetur ipsum sunt distinctio dignissimos. Facilis, porro et incidunt molestiae commodi beatae quasi praesentium debitis aperiam. Quo, dolore! Consequatur numquam aliquam nostrum expedita nemo aliquid. Quidem sint consequuntur dolores illum amet quaerat quam aliquam dicta unde vitae quas iste saepe ipsum cupiditate numquam quia consectetur et possimus animi impedit nulla, suscipit libero? Aliquam harum alias expedita aspernatur maxime asperiores ratione animi voluptatem enim tempora officia perspiciatis cumque, quod numquam laborum dolores sit molestiae quo natus! Ducimus excepturi doloremque vel eligendi ullam magni totam aperiam labore quasi voluptate praesentium fugiat hic odio officiis illo at mollitia laboriosam, reiciendis voluptatum error voluptates eius. Nulla ea quidem, autem cum et provident similique nobis eos quod sapiente harum eum nihil optio voluptatibus cumque sunt quasi labore inventore dolore architecto quae rem modi repellat? Assumenda illum omnis iusto perspiciatis eaque voluptatibus in saepe nobis necessitatibus, odio, soluta beatae reiciendis veniam. Corporis sunt architecto numquam eos earum quod odio reiciendis soluta quae vero necessitatibus, suscipit asperiores voluptatem distinctio praesentium, eveniet quasi! Quibusdam, excepturi deserunt perspiciatis sequi possimus accusamus. Nulla itaque sit nostrum perspiciatis aliquid eaque dolore dolorum, alias numquam odit eligendi, nobis delectus labore, maxime adipisci. Soluta delectus hic ratione ducimus totam aut alias quam nobis officiis aperiam ea impedit illo repellendus nostrum iusto veritatis fuga ullam laboriosam odio sed culpa, esse id dolores doloribus! Quaerat quae tempora, temporibus consequatur possimus quidem nihil eum voluptatum ad illo id recusandae expedita neque eius autem provident doloremque, architecto adipisci facilis molestias reprehenderit nisi cumque? Earum soluta amet tempora beatae cumque ipsa veniam, eaque impedit, aperiam neque corrupti obcaecati fuga. Soluta nulla eligendi architecto fuga eos, iure ipsa vel dolores mollitia tempore minus. Possimus qui rerum ullam, soluta expedita quae asperiores magnam iusto, necessitatibus quo sint nulla illo quis? Repellat labore ea velit, veniam tempora optio nisi nesciunt voluptatem porro dolores eum animi, maxime eveniet doloribus exercitationem excepturi hic error eos quo? Officiis, nisi? Molestias quam, facere impedit a tempora numquam eum dolorem est esse ad dolorum repellat quaerat at, illum aliquam iusto, sed accusamus eligendi excepturi. Minima quos dolorum quas nemo soluta magni aut ut eos placeat aspernatur, tempora, quasi voluptas nobis necessitatibus ex sequi iste totam illo quis. Corporis amet ut quibusdam voluptatem deserunt eum aspernatur laborum cupiditate, dolores maxime quidem aperiam molestias qui a exercitationem nihil officiis asperiores et quis quam ad? Ab nesciunt repellat ad ducimus, repellendus pariatur laborum aliquid dignissimos assumenda voluptatibus quibusdam quidem fugiat perferendis omnis perspiciatis dolor veritatis provident quaerat. Repudiandae eum laudantium rerum aliquam facilis dicta aperiam, ipsam, tempore suscipit incidunt cum harum dolorem voluptatibus nam soluta obcaecati molestias expedita debitis voluptates autem consectetur doloremque quas id similique. Atque possimus, laboriosam tempore veritatis nihil magni vero ut, assumenda veniam laborum necessitatibus accusantium animi. Corporis animi veritatis incidunt nulla dolor obcaecati, illo inventore voluptates possimus repellat cum, architecto id minima veniam dicta rerum mollitia?</p>
        </div>

        <div className="aboutpf">
      <p> project uploding soon </p>
    </div>

    <div className="contectpf"> 
        <form onSubmit={handleSubmit}>
            <input placeholder="NAME" name="name" type="text" onChange={handleChange}/>
            <input type="text" name="email" placeholder="email id" onChange={handleChange} />
            <textarea type="text" name="message" placeholder="your-message" onChange={handleChange}/>
            <button type="submit">send</button>
        </form>
    </div>

                </div>

            </div>
        </>
    );
}
export default Dashbord;