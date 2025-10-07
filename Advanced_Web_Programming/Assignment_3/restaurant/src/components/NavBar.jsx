import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import React, {useState} from "react";
import brand from '../assets/brand.jpg'

const NavBar = () => {
    const webLinks = [
        {
            link: 'hiring',
            displayName: 'Join The Team'
        },{
            link: 'menu',
            displayName: 'Our Menu'
        },{
            link: 'splash',
            displayName: 'Homepage'
        }
        ];

    const webLinksDropdown = webLinks.map((element,index) => {
        return(
            <NavItem key = {index}>
                <NavLink href={element.link} className="Navbar-Options">{element.displayName}</NavLink>
            </NavItem>
        )
    })

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <div className="row border-cream Navbar-Background_Light">
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className=" me-auto"><img src = {brand} className="navbar-brand_img" alt={"Brand"}/>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="me-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            {webLinksDropdown}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default NavBar;