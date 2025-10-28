
import '../src/App.css';
import {PageHeader} from "./components/PageHeader.tsx";
import {Outlet} from "react-router-dom";

export const App = () => {

  return (
    <>
        <PageHeader />
        {/*Spacer for temp testing*/}
        <div className={"h-15 col-lg-12"}></div>
        <div>
            <Outlet />
        </div>
    </>
  )
}

