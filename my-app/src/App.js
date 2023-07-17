import React from "react" ;
import {footer, blog, possibility, features, whatGPT3, header } from "./containers";
import { cta, article, brand, navbar, feature} from "./components";
// import WhatGPT3 from "./containers/whatGPT3/whatGPT3";
// import Features from "./containers/features/features";
// import Possibility from "./containers/possibility/possibility";
// import CTA from "./components/cta/CTA";
// import Blog from "./containers/blog/blog";
// import Footer from "./containers/footer/footer";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./containers/header/header";
// import Brand from "./components/brand/Brand";

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App