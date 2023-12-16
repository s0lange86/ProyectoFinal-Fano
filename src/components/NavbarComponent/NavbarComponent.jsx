import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import './NavbarComponent.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    
    return (
        <Navbar bg="dark" data-bs-theme="dark" sticky="top" expand="lg" className="bg-body-tertiary navbar-style">
            <Container>
                <Navbar.Brand>
                    <Link className='brand-style' to={'/'}>Librit0s!</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link style={{textDecoration: 'none', color:'rgba(255, 255, 255, 0.55)'}} to={'/'}>Home</Link>
                        </Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link className='textNavbar-style' to={'/category/books'}>Books</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='textNavbar-style' to={'/category/diary'}>Diary</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidgetComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;