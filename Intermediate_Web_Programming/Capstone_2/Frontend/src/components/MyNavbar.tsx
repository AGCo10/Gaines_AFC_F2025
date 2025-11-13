import {Container, Nav, Navbar} from "react-bootstrap";
import HammerAndAnvil from "../assets/HammerAndAnvil.gif"
import {useState} from "react";

export const MyNavbar = ()=> {
    const myNavs = [
        {
            link: 'splash',
            displayName: 'Home'
        },{
            link: 'inventory',
            displayName: 'Inventory'
        }
    ];
    const [banner, showBanner] = useState('hidden');

    const myNavLinks = myNavs.map((element,index) => {
        return(
            <Nav.Link key = {index} href={element.link}>{element.displayName}</Nav.Link>
        )
    })

    return (
    <>
        <Navbar expand="lg" className="grid Navbar bg-body-tertiary col-12">
            <Container fluid>
                <Navbar.Brand><img src={HammerAndAnvil} className={"Brand-Image"} alt="Hammer and Anvil"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        {myNavLinks}
                    </Nav>
                    <div className={'toggle-div'}>
                        <label className={'toggle-label'} htmlFor={'banner-context'}> Toggle Banner </label>
                        {/*The Banner will be toggled between true/false*/}
                        <input type="checkbox" className={'toggle-input'} id={'banner-context'} name={'banner-context'} checked={banner === 'promotion-banner'} onChange={(e) => {
                            showBanner(e.target.checked ? 'promotion-banner' : 'hidden');
                        }}
                        />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
    );
}