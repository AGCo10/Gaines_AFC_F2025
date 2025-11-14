import { Container, Nav, Navbar } from "react-bootstrap";
import HammerAndAnvil from "../assets/HammerAndAnvil.gif";
import {BannerContext} from "../util/BannerContext.tsx";
import {useContext} from "react";

export const MyNavbar = () => {


    const {handleToggle} = useContext(BannerContext);

    const myNavs = [
        {
            link: 'splash',
            displayName: 'Home'
        },
        {
            link: 'inventory',
            displayName: 'Inventory'
        }
    ];

    const myNavLinks = myNavs.map((element, index) => (
        <Nav.Link key={index} href={element.link}>{element.displayName}</Nav.Link>
    ));


    return (
        <>

            <Navbar expand="lg" className="grid Navbar bg-body-tertiary col-12">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={HammerAndAnvil} className={"Brand-Image"} alt="Hammer and Anvil" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            {myNavLinks}
                        </Nav>
                        <div className={'toggle-div'}>
                            <label className={'toggle-label'} htmlFor={'banner-context'}> Toggle Banner </label>
                            <input type="checkbox" className={'toggle-input'} id={'banner-context'} name={'banner-context'}
                                   onChange={handleToggle}
                            />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}