import React from 'react';
import Navbar from "../component/Navbar"
import Landing from "../component/home/landing"
import Article from "../component/home/article"
import Footer from "../component/footer"
import About from '../component/home/about';

function Index() {
  return (
    <>
        <Navbar />
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
