import {Table} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import PiratePickleImage from '../assets/pirate_pickle.jpeg' ;
import PrePickleImage from '../assets/pre-pickle.jpeg' ;
import AngryPickleImage from '../assets/angry_pickle.jpeg' ;
import DoubleStuffPickleImage from '../assets/double_stuff_pickle.jpeg' ;
import ShakeBakePickleImage from '../assets/shake_and_bake_pickle.jpeg' ;




const MenuPage = () => {

    return (
        <>
            <div className="container " style={{height: "90px"}}>
                <div className="row">
                    <div className="bebas-neue-regular col-lg-12 col-sm-12 center"
                         style={{height: "90px"}}>Check whats in the brine barrel
                    </div>
                </div>
                <div className="row" style={{height: "90px"}} >
                    <div className="col-lg-12 col-sm-12">
                        <Table striped>
                            <thead>
                            <tr>
                                <th className='col-lg-4'>
                                    Item
                                </th>
                                <th>
                                    Item Name
                                </th>
                                <th>
                                    Item Description
                                </th>
                                <th>
                                    Price
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {MenuItemsTabled}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    ) ;
}

export default MenuPage ;