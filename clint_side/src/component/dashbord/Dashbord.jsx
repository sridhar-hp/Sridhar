import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dash.css";

function Dashbord() {
    const [change, setChange] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setChange({ ...change, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/contect", change);
            alert("message send succusfully");
            setChange({ name: "", email: "", message: "" });
        }

        catch (error) {
            console.log("error from contect page ", error);
        }
    }

    // Function to scroll smoothly but with navbar offset
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        const navbarHeight = document.querySelector(".navebar").offsetHeight;

        // Calculate scroll position with offset
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: sectionTop,
            behavior: "smooth",
        });
    };


    return (
        <>
            <div className="layout">
                <div className="navebar">
                    <button onClick={() => scrollToSection("home")} className="hed">HOME</button>
                    <button onClick={() => scrollToSection("about")} className="hed">ABOUT</button>
                    <button onClick={() => scrollToSection("projects")} className="hed">PROJECTS</button>
                    <button onClick={() => scrollToSection("cirtificate")} className="hed">cirtificate</button>
                    <button onClick={() => scrollToSection("contact")} className="hed">CONTACT</button>


                    <img src="/public/sridhar.jpg" alt="just profjinle" className="profilepic" />

                </div>

                <br />
                <br />

                <div className="main-content">
                    <div id="home" className="homepf">
                        <h3>hello i am Sridhar k</h3>
                        <p>a passionate and curious web developer with a strong interest in building clean, user-friendly websites and applications. Welcome to my portfolio! Here, you’ll find insights into who I am, the technologies I work with, and the projects I’ve built. I believe in continuous learning and using technology to solve real-world problems. Let’s connect and create something great together.
                        </p>
                    </div>

                    <div id="about" className="aboutpf">
                        <h3>About Me</h3>
                        <p>Profile photo</p> 
                        

                           <p> Short bio (3–5 lines)</p>

                            <p>“I’m a passionate full stack developer with a focus on building modern, efficient, and scalable web applications using React.js, Node.js, Express, and MongoDB.” </p>
                            <p>Your learning journey</p>

                            <p>“Currently exploring AI integration in web apps.”</p>

                            <p>Your skills (visual list or icons)</p>

                           <p> HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, Git, Vite, TailwindCSS</p>
                           <p> Tools / IDEs</p>

                            <p>VS Code, Postman, GitHub, MongoDB Compass</p>

                            <p>Interests</p>

                            <p>AI Development, UI/UX Design, Open Source, Automation</p>

                    </div>

                    <div id="projects" className="aboutpf">
                        <h3>Projects</h3>
                        <p> project uploding soon Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eum perspiciatis iusto exercitationem autem nihil sed eligendi laborum deleniti hic dolorem ratione, quisquam cum quos nemo, mollitia veritatis voluptatum ea quidem non? Quos, distinctio quae beatae voluptatum recusandae totam repudiandae architecto sed, perspiciatis nostrum dignissimos fugit porro ad. Cupiditate maxime molestias enim dicta fuga animi, hic itaque! Dignissimos omnis voluptate sit libero consectetur tenetur corporis deserunt temporibus fugit distinctio. Ab doloribus incidunt voluptas modi neque. Enim quaerat facere animi corporis ea perferendis illum aliquid ullam autem voluptatem accusantium itaque deleniti obcaecati ratione vitae tenetur ducimus dolores, cupiditate corrupti cumque porro ad. Debitis officia officiis, maxime eos et illo eveniet! Harum soluta doloremque vero fugiat non, officia at quia illo natus, voluptatibus reiciendis quae dolorem nulla culpa, mollitia ut fuga repellendus. Praesentium sit, facilis aliquam libero nam inventore expedita perspiciatis voluptate, earum soluta omnis accusantium quae, itaque dolorum? Voluptates fugit delectus ipsum laborum similique ea impedit ut laudantium hic, eveniet totam iusto officia modi quia, obcaecati perferendis assumenda saepe nihil doloribus quam. Non, ipsum quod eveniet consectetur adipisci quia nulla assumenda eligendi saepe vero esse obcaecati soluta, et sed! Est, quasi quam quo vel voluptatum omnis esse, minus alias officia tenetur suscipit ea, culpa magnam. Optio nobis consectetur voluptatum, ullam sed eius eos ea repellat deleniti! Et, temporibus reiciendis dolore voluptatibus, blanditiis dicta expedita ex officia animi deleniti eos mollitia. Quidem excepturi blanditiis nam hic, veritatis rerum repellat aliquam, nisi laborum repudiandae provident facilis tempore similique consequuntur sequi odit perspiciatis quo, totam numquam porro quasi veniam iure itaque? Ullam amet quaerat, quae architecto fugiat eius, sequi veritatis velit ipsam porro iusto tempore voluptatibus odio sunt repudiandae rem. Consequuntur, tempore delectus provident nulla vel magnam possimus eius commodi dicta, odio laudantium tempora ipsum inventore maxime sunt a similique accusamus, obcaecati voluptas voluptatem? Vel doloremque voluptates debitis? Distinctio, esse, nihil suscipit dolorum minus dolores officia architecto sit hic sunt voluptas unde voluptatum, consequuntur deleniti sapiente quisquam harum voluptatem? Perspiciatis, animi omnis veritatis, alias numquam cupiditate excepturi labore ipsam molestiae asperiores nulla voluptates assumenda tenetur dignissimos voluptas! Deleniti cumque nemo omnis libero, minus inventore? Earum, voluptate necessitatibus reprehenderit cum amet adipisci incidunt, nobis debitis odio odit natus, maiores beatae quia! Dignissimos quibusdam doloremque soluta ea, eligendi possimus sed molestias aliquid ipsa, mollitia aspernatur hic. Totam veritatis minima dicta eveniet ad illo voluptatum aliquid in illum deleniti. Quia numquam ipsum voluptates beatae, dolorum pariatur incidunt iusto necessitatibus excepturi nemo dolore dicta fugit iure nihil asperiores, deserunt accusamus fuga expedita nisi nostrum maiores? Aut vero numquam ullam error obcaecati cupiditate esse provident quidem molestiae iure, eos hic exercitationem modi consequuntur pariatur ipsa nostrum omnis, quam rem, eligendi cum quia commodi assumenda corporis. Aliquam tempora dolor illo qui perspiciatis repellendus earum voluptas voluptate animi corrupti eligendi dicta voluptatem expedita assumenda, nulla placeat nobis doloribus! Rerum quae iusto magnam praesentium optio. Rerum eligendi assumenda quia accusantium soluta fuga repellendus corrupti quisquam repudiandae deserunt architecto enim, mollitia dicta nesciunt qui, et pariatur tempora modi iure explicabo ut id impedit, quas excepturi! Quas animi excepturi, ad impedit dignissimos id quam doloribus necessitatibus. Provident molestias eligendi vel, quo cum qui ex dolorum officia corporis quidem mollitia doloremque dolorem voluptates tempora ab exercitationem consequatur consectetur velit ipsam dolore laudantium culpa expedita. Magni suscipit ratione laboriosam, nam natus officiis, quaerat reiciendis eligendi ipsam itaque vitae ipsa, ullam illo a. Maiores, architecto. Optio, porro ipsa velit fugit pariatur suscipit, aliquid vitae consectetur eligendi officia maxime, iure aut ea accusamus. Ratione, at rerum? Consequuntur odio, autem repellat at tenetur maxime aliquid, ullam officia unde voluptatum fugiat vero suscipit architecto illum quam optio, error labore quas voluptatem? Ex nemo enim, est fugit sit inventore eveniet nisi et consectetur recusandae? Nemo dicta corporis ducimus alias exercitationem, voluptatem voluptatum tempore, debitis nisi provident unde similique commodi porro consequuntur inventore, sequi quasi maxime aut molestias. Eum similique repellendus consequuntur facilis, quis voluptatibus quidem distinctio corporis excepturi laboriosam officiis reiciendis ab. Vero repudiandae beatae odit officia illo saepe quaerat laboriosam voluptatem vitae velit. Sint in ratione quam? Perferendis pariatur accusamus, commodi eligendi fuga placeat quo cupiditate vitae possimus vero rem! Vel soluta necessitatibus minima illum praesentium. Obcaecati corporis temporibus distinctio beatae cum aliquid, quibusdam est fugiat ea, porro adipisci inventore fuga blanditiis consectetur odio optio dolorum dolores non esse doloribus iste. Voluptates reiciendis fugiat est vero pariatur modi dolor quo repudiandae incidunt perferendis. Alias dolore molestias ipsa autem quod, delectus vitae. Ducimus inventore esse, saepe sit quia odio dolorum repudiandae vel praesentium, velit qui, debitis incidunt corrupti. Cupiditate ipsum magni earum provident architecto sint obcaecati sunt quibusdam vel id atque consequuntur, corporis consectetur dolore cumque aspernatur minima autem illo, optio sapiente hic? Quod placeat laborum quasi nemo quos neque? Unde molestias ipsum recusandae nulla qui, in perferendis nihil suscipit alias quaerat officia at aspernatur non distinctio natus, placeat beatae quasi delectus excepturi perspiciatis? Laboriosam, saepe? Labore saepe dolor vero ducimus obcaecati molestias, error velit, suscipit, vitae accusamus alias! Ducimus deleniti earum nisi, dolore provident dolorem saepe fuga eligendi corrupti. Blanditiis temporibus sint suscipit, nemo magni eius mollitia labore earum accusantium, veritatis ipsam quibusdam libero amet itaque harum. Cumque, eveniet odit? Optio alias corrupti modi inventore odit in eos assumenda fuga eligendi aut neque voluptate laborum, veritatis fugiat velit voluptatem aliquid ad incidunt sed. Quaerat accusamus doloribus minima voluptatibus. Labore, eum? Sit earum non corrupti libero, commodi beatae esse at. Officia sunt sit veritatis natus, fuga inventore cumque omnis earum eius quae distinctio modi aut, ducimus doloremque illum voluptate repudiandae id neque. Deleniti nesciunt nemo eos accusamus eaque sunt nam, culpa, quis ratione necessitatibus est sed mollitia facere? Deleniti, dolor. Minima provident, ex beatae quos officia eos? Maxime neque rem earum molestias consequuntur pariatur quam necessitatibus, culpa veniam ab quia corrupti dolorem praesentium ratione nemo velit ducimus non laboriosam distinctio. Libero consequuntur ipsum non sapiente nesciunt et alias obcaecati voluptatibus velit architecto? Quidem in, porro consequuntur dolor dolore necessitatibus. Eveniet harum nihil totam maxime veniam, doloremque possimus quas quae ullam sit culpa laborum tenetur corporis quos provident assumenda magnam. Animi, eius.</p>
                    </div>

                    <div id="cirtificate" className="aboutpf">
                        <h3>cirtificate</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptate dolorum perferendis optio quaerat. Consequatur laudantium necessitatibus dolor asperiores, itaque odit deleniti laborum quod dolorem provident, omnis dicta tenetur ipsum sunt distinctio dignissimos. Facilis, porro et incidunt molestiae commodi beatae quasi praesentium debitis aperiam. Quo, dolore! Consequatur numquam aliquam nostrum expedita nemo aliquid. Quidem sint consequuntur dolores illum amet quaerat quam aliquam dicta unde vitae quas iste saepe ipsum cupiditate numquam quia consectetur et possimus animi impedit nulla, suscipit libero? Aliquam harum alias expedita aspernatur maxime asperiores ratione animi voluptatem enim tempora officia perspiciatis cumque, quod numquam laborum dolores sit molestiae quo natus! Ducimus excepturi doloremque vel eligendi ullam magni totam aperiam labore quasi voluptate praesentium fugiat hic odio officiis illo at mollitia laboriosam, reiciendis voluptatum error voluptates eius. Nulla ea quidem, autem cum et provident similique nobis eos quod sapiente harum eum nihil optio voluptatibus cumque sunt quasi labore inventore dolore architecto quae rem modi repellat? Assumenda illum omnis iusto perspiciatis eaque voluptatibus in saepe nobis necessitatibus, odio, soluta beatae reiciendis veniam. Corporis sunt architecto numquam eos earum quod odio reiciendis soluta quae vero necessitatibus, suscipit asperiores voluptatem distinctio praesentium, eveniet quasi! Quibusdam, excepturi deserunt perspiciatis sequi possimus accusamus. Nulla itaque sit nostrum perspiciatis aliquid eaque dolore dolorum, alias numquam odit eligendi, nobis delectus labore, maxime adipisci. Soluta delectus hic ratione ducimus totam aut alias quam nobis officiis aperiam ea impedit illo repellendus nostrum iusto veritatis fuga ullam laboriosam odio sed culpa, esse id dolores doloribus! Quaerat quae tempora, temporibus consequatur possimus quidem nihil eum voluptatum ad illo id recusandae expedita neque eius autem provident doloremque, architecto adipisci facilis molestias reprehenderit nisi cumque? Earum soluta amet tempora beatae cumque ipsa veniam, eaque impedit, aperiam neque corrupti obcaecati fuga. Soluta nulla eligendi architecto fuga eos, iure ipsa vel dolores mollitia tempore minus. Possimus qui rerum ullam, soluta expedita quae asperiores magnam iusto, necessitatibus quo sint nulla illo quis? Repellat labore ea velit, veniam tempora optio nisi nesciunt voluptatem porro dolores eum animi, maxime eveniet doloribus exercitationem excepturi hic error eos quo? Officiis, nisi? Molestias quam, facere impedit a tempora numquam eum dolorem est esse ad dolorum repellat quaerat at, illum aliquam iusto, sed accusamus eligendi excepturi. Minima quos dolorum quas nemo soluta magni aut ut eos placeat aspernatur, tempora, quasi voluptas nobis necessitatibus ex sequi iste totam illo quis. Corporis amet ut quibusdam voluptatem deserunt eum aspernatur laborum cupiditate, dolores maxime quidem aperiam molestias qui a exercitationem nihil officiis asperiores et quis quam ad? Ab nesciunt repellat ad ducimus, repellendus pariatur laborum aliquid dignissimos assumenda voluptatibus quibusdam quidem fugiat perferendis omnis perspiciatis dolor veritatis provident quaerat. Repudiandae eum laudantium rerum aliquam facilis dicta aperiam, ipsam, tempore suscipit incidunt cum harum dolorem voluptatibus nam soluta obcaecati molestias expedita debitis voluptates autem consectetur doloremque quas id similique. Atque possimus, laboriosam tempore veritatis nihil magni vero ut, assumenda veniam laborum necessitatibus accusantium animi. Corporis animi veritatis incidunt nulla dolor obcaecati, illo inventore voluptates possimus repellat cum, architecto id minima veniam dicta rerum mollitia?</p>
                    </div>


                    <div id="contact" className="contectpf">
                        <h3>Contect Me</h3>
                        <form onSubmit={handleSubmit}>
                            <input placeholder="NAME" name="name" type="text" onChange={handleChange} />
                            <input type="text" name="email" placeholder="email id" onChange={handleChange} />
                            <textarea type="text" name="message" placeholder="your-message" onChange={handleChange} />
                            <button type="submit">send</button>
                        </form>
                        <div className="socialmedia">


                            <a className="logo1" href="https://www.github.com/sridhar-hp" target="_blank" rel="noopener noreferrer"><img className="git" src="/public/Github.png" alt="githun-logo" /></a>

                            <a className="logo2" href="https://www.linkedin.com/in/sridhark3773" target="_blank" rel="noopener noreferrer"><img src="/public/Linkedin.png" alt="" /></a>

                            <a className="logo3" href="https://leetcode.com/progress/" target="_blank" rel="noopener noreferrer"><img src="/public/leetCode-logo.png" alt="" /></a>

                            <a className="logo4" href="https://www.instagram.com/sridhar.k3773" target="_blank" rel="noopeneer noreferrer"><img src="/public/insta.gif" alt="" /></a>


                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Dashbord;