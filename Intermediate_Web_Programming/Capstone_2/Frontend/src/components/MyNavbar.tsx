import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import HammerAndAnvil from "../assets/HammerAndAnvil.gif"

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

    const myNavLinks = myNavs.map((element,index) => {
        return(
            <Nav.Link key = {index} href={element.link}>{element.displayName}</Nav.Link>
        )
    })

    return (
    <>
        <Navbar expand="lg" className="Navbar bg-body-tertiary col-12">
            <Container fluid>
                <Navbar.Brand><img src={HammerAndAnvil} className={"Brand-Image"} alt="Hammer and Anvil"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        {myNavLinks}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
    );
}