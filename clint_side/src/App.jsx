import React from "react";
import Dashbord from "./component/dashbord/Dashbord.jsx";
import About from "./component/dashbord/about-page/About.jsx";
import Contect from "./component/dashbord/contect/Contect.jsx";
import Home from "./component/dashbord/home-page/home.jsx";
import Project from "./component/dashbord/project-page/Project.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//if you use index the element page is open default

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Route path="/" element={<Dashbord />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="project" element={<Project />} />
                        <Route path="contect" element={<Contect />} />
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
