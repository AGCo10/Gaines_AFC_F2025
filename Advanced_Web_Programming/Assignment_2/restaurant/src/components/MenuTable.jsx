import {Table} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import PiratePickleImage from '../assets/pirate_pickle.jpeg' ;
import PrePickleImage from '../assets/pre-pickle.jpeg' ;
import AngryPickleImage from '../assets/angry_pickle.jpeg' ;
import DoubleStuffPickleImage from '../assets/double_stuff_pickle.jpeg' ;
import ShakeBakePickleImage from '../assets/shake_and_bake_pickle.jpeg' ;




const MenuTable = () => {
    // Hard coded the Currency symbol for now. Will eventually correct.
    const menuItems = [
        {
            imageURL: AngryPickleImage,
            name: 'Angry Pickle Platter',
            description: 'Try out extra hot pickle that will have your eyes and mouth watering. Served with a side of our house Cole Slaw and baked beans.',
            price: '$12.99'
        },
        {
            imageURL: PiratePickleImage,
            name: 'Pirates Plunder',
            description: 'A more robust flavor, these pickles are brined in caribbean rum. Served with a side shrimp, seasoned mango, and cheese cubes.',
            price: '$10.99'
        },
        {
            imageURL: DoubleStuffPickleImage,
            name: 'Double Stuffed',
            description: 'Have a pickle, stuffed with pickled crab with gravy. Try some mashed potatoes and corn on the side.',
            price: '$8.99'
        },
        {
            imageURL: ShakeBakePickleImage,
            name: 'Shake and Bake',
            description: 'Everybody loves a fried pickle, so try ours! Served with marinara and lime.',
            price: '$6.99'
        },
        {
            imageURL: PrePickleImage,
            name: 'Pre-Pickle',
            description: "How about a pickle that hasn't been brined yet? Enjoy a sliced and seasoned cucumber served with crab on a bed of house salad.",
            price: '$6.99'
        }
    ];
    // Eventually get this plugged back into the table when I figure out how.
    // const usdFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    const MenuItemsTabled = menuItems.map((element, index) => {
        return(
            <tr key = {index}>
                <td>
                    <img src={element.imageURL} className='Menu-Image' alt={element.name} />
                </td>
                <td>
                    {element.name}
                </td>
                <td>
                    {element.description}
                </td>
                <td>
                    {element.price}
                </td>
            </tr>
        )
    })

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