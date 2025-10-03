import './App.css'
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.jsx"
import Header from "./components/Header.jsx";

const App = () => {

  return (
    <>
        <Header />
        <NavBar />
        <div>
            <Outlet />
        </div>
    </>
  )
}

export default App ;
