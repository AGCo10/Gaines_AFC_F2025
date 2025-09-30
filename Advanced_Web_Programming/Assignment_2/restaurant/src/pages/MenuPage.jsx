import {menuItems} from '../components/MenuTable.jsx';
import {Table} from 'reactstrap'
const MenuPage = () => {
    const MenuItemsTabled = menuItems.map((element, index) => {
        return(
                <tr key = {index}>
                    <th scope="row">
                    </th>
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

    const menuItems = [
        {
            imageURL: './assets/angry_pickle.jpeg',
            name: 'Angry Pickle Platter',
            description: 'Try out extra hot pickle that will have your eyes and mouth watering. Served with a side of our house Cole Slaw and baked beans.',
            price: 12.99,
        },
        {
            imageURL: './assets/pirate_pickle.jpeg',
            name: 'Pirates Plunder',
            description: 'A more robust flavor, these pickles are brined in caribbean rum. Served with a side shrimp, seasoned mango, and cheese cubes.',
            price: 10.99,
        },
        {
            imageURL: './assets/double_stuff_pickle.jpeg',
            name: 'Double Stuffed',
            description: 'Have a pickle, stuffed with pickled crab with gravy. Try some mashed potatoes and corn on the side.',
            price: 8.99,
        },
        {
            imageURL: './assets/shake_and_bake_pickle.jpeg',
            name: 'Shake and Bake',
            description: 'Everybody loves a fried pickle, so try ours! Served with marinara and lime.',
            price: 6.99,
        },
        {
            imageURL: './assets/pre-pickle.jpeg',
            name: 'Pre-Pickle',
            description: "How about a pickle that hasn't been brined yet? Enjoy a sliced and seasoned cucumber served with crab on a bed of house salad.",
            price: 6.99,
        }
    ];
    return (
        // The whole page Starts here
        <>

            <div className="container " style="height: 900px">
            <div className="row">
                <div className="bebas-neue-regular col-lg-8 col-sm-12 center"
                     style="height: 125px; margin-top: 50px">Check whats in the brine barrel
                </div>
            </div>
            <!-- The Menu Table begins -->
            <div className="row" style="height: 500px" >
                <div className="col-lg-12">
                    <Table striped>
                        <thead>
                        <tr>
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
            <!-- The Menu Table begins -->
        </div>
        </>
        // The whole page ends here
    ) ;
}