import React from 'react';
import Landing from "../component/home/landing"
import Article from "../component/home/article"
import Footer from "../component/footer"
import About from '../component/home/about';
import NavbarHome from '../component/navbarHome';

function Index() {
  return (
    <>
        <NavbarHome />
        <Landing/>
        <div className="home-container">
            <Article/>
            <About/>
        </div>
        <Footer />
    </>
  )
}

export default Index
