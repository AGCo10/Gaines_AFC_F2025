import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";


const AppLayout = () => {
    return (
        <>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AppLayout ;