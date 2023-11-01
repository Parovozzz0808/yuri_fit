import React from "react";
import './App.css';
import './index.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Benefits from "./components/Benefits/Benefits";
import About from "./components/About/About";
import Activity from "./components/Activitty/Activity";
import Video from "./components/Video/Video";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
    <div className="container">
        <Header />
        <Main />
        <Benefits /> 
        <About />
        <Activity />
        <Video />
        <Results />
        <Footer /> 
    </div>        
    )
}

export default App


