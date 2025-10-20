import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import HammerAndAnvil from "../assets/HammerAndAnvil.gif"


export const MyNavbar = ()=> {
    return (
        <Navbar expand="lg" className="bg-body-tertiary col-lg-12">
            <Container fluid className="Frame-Visualizer-Black">
                <Navbar.Brand><img src={HammerAndAnvil} className={"Brand-Image"} alt="Hammer and Anvil"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Inventory</Nav.Link>
                        <Nav.Link href="#" disabled>About Us</Nav.Link>
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
    );
}