
import '../src/App.css';
import {PageHeader} from "./components/PageHeader.tsx";
import {Outlet} from "react-router-dom";

export const App = () => {

  return (
    <>
        <PageHeader />
        <div className={"h-40 col-lg-12"}></div>
        <div>
            <Outlet />
        </div>

    </>
  )
}

