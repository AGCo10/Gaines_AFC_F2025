
import './App.css'
import {PageHeader} from "./components/PageHeader.tsx";
import {Outlet} from "react-router-dom";

export const App = () => {

  return (
    <>
        <PageHeader />
        <div>
            <Outlet />
        </div>
    </>
  )
}

