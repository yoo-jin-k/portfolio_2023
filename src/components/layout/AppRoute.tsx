import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Project from '../../pages/project/Project';
import Contact from '../../pages/contact/Contact';

const AppRoute = () =>
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </>;
export default AppRoute;
