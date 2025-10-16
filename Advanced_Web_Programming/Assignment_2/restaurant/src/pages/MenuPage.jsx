import 'bootstrap/dist/css/bootstrap.min.css';
import {MenuTable} from "../components/MenuTable.jsx";

const MenuPage = () => {

    return (
        <>
            <div className="container " style={{height: "90px"}}>
                <div className="row">
                    <div className="bebas-neue-regular col-lg-12 col-sm-12 center background-dull-highlight"
                         style={{height: "90px"; backgroundColor: "blue"}}>Check whats in the brine barrel
                    </div>
                </div>
                <MenuTable />
            </div>
        </>
    ) ;
}

export default MenuPage ;