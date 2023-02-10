import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"
import AccountMenu from '../Account/Account';
import Wallet from '../Wallet/Wallet';
import "./Navbar.css"

function CollapsibleExample() {

    return (
        <>
            <div className=''>


                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='Navbar' fixed='top' style={{width:"80%",margin:"auto"}}>
                    <Container>
                        <Navbar.Brand href="/" className='homeicon'><i class="fa-solid fa-house-chimney"></i></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse >
                            <Nav className="me-auto">
                                <div className='hovereffect'><Link className='textdecoration'><p className='textcolorfont'>MEN</p></Link></div>
                                <div className='hovereffect'><Link className='textdecoration'><p className='textcolorfont'>WOMEN</p></Link></div>
                                <div className='hovereffect'><Link className='textdecoration'><p className='textcolorfont'>MOBILE</p></Link></div>
                                <div className='hovereffect'><Link className='textdecoration'><p className='textcolorfont'>FASHION</p></Link></div>
                                {/* <div className='hovereffect'><Link className='textdecoration'><p className='textcolorfont'>STUDENTS</p></Link></div> */}


                                {/* <div className='hovereffect'><NavDropdown className='dropdouwn' title="Services" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/adddldetails">DL Card Print</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Voter Card Print</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Adhar Card Print</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Rashan Card</NavDropdown.Item>
                                </NavDropdown></div> */}

                            </Nav>
                            <Nav>
                                <Wallet/>
                                <AccountMenu />
                                <Nav.Link eventKey={2} href="#memes" className='hignore' style={{color:"#212529"}}>
                                    h
                                </Nav.Link>
                              <Navbar.Brand><i class="fa-solid fa-magnifying-glass"></i></Navbar.Brand>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </>
    );
}

export default CollapsibleExample;