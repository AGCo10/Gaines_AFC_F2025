import { useState } from 'react'
import './App.css'
import {Outlet} from "react-router-dom";
import SplashPage from "./pages/SplashPage.jsx";
import NavBar from "./components/NavBar.jsx"
import MenuPage from "./pages/MenuPage.jsx";

const App = () => {

  return (
    <>
        <h1>I am the Restaurant App</h1>
        <NavBar />
        <div>
            <Outlet />
        </div>
    </>
  )
}

export default App
