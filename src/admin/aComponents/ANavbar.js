import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function ANavbar(props) {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href=" " ><h3 style={{ marginBottom: "0px", marginTop: "0px", padding: "0", margin: "auto" }}
                >{props.heading}</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    {/* to align extreme left and right s*/}
                    <Nav className="mr-auto">  
                    </Nav>
                    {/* to align extreme left and right e */}

                    <Nav >
                        <Link to="Admin">Admin</Link>



                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         
        </>
    )
}

export default ANavbar
