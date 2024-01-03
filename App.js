import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Poem from "./Poem";

function NavBar() {
  return (
    <>
     
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/poem">Poem</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/poem' element={<Poem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
