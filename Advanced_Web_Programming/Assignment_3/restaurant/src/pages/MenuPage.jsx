import 'bootstrap/dist/css/bootstrap.min.css';
import {MenuTable} from "../components/MenuTable.jsx";

const MenuPage = () => {

    return (
        <>
            <div className="container " style={{height: "90px"}}>
                <div className="row">
                    <div className="bebas-neue-regular col-lg-3 col-sm-0"></div>
                    <div className="bebas-neue-regular col-lg-6 col-sm-12 center background-dull-highlight"
                         style={{height: "90px"}}>Check whats in the brine barrel
                    </div>
                <div className="bebas-neue-regular col-lg-3 col-sm-0"></div>

                </div>
                <MenuTable />
            </div>
        </>
    ) ;
}

export default MenuPage ;