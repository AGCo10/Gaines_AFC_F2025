
import './App.css'
import {PageHeader} from "./components/PageHeader.tsx";
import {Outlet} from "react-router-dom";
import {PromotionBanner} from "./components/PromotionBanner.tsx";

export const App = () => {

  return (
    <>
        <PageHeader />
        <PromotionBanner />
        {/*Spacer for temp testing*/}
        <div className={"h-15 col-lg-12"}></div>
        <div>
            <Outlet />
        </div>
    </>
  )
}

