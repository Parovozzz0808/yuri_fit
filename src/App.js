import React from "react";
// import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

const App = () => {
    return (
       <Layout>
            <Header />
       </Layout>
    )
}

export default App


