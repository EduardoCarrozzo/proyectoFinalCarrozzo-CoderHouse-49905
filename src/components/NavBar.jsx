import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import { useCategory } from '../hooks/useCategory';
import CardWidget from './CardWidget';

export const NavBarComponent  = () => {

  const {category} = useCategory();

    return (<Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Link 
        to='/'>
        <img src="https://cdn-icons-png.flaticon.com/512/1966/1966211.png" alt="Página principal" style={{ width: '40px', height: '40px' }} />
        El regalón
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>Link</Nav.Link>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            {category.map((category, index) => {
              return <NavDropdown.Item key={index}>
              <Link to={`/category/${category}`}>{category}</Link>
            </NavDropdown.Item>
            })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CardWidget></CardWidget>
    </Container>
  </Navbar>)
}
