import { useState } from 'react'
import './App.css'
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.jsx"

const App = () => {

  return (
    <>
        <h1>Richard's Pickles</h1>
        <NavBar />
        <div>
            <Outlet />
        </div>
    </>
  )
}

export default App ;
