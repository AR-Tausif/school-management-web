
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from '../utilities/Button'
import { NavLink } from 'react-router-dom';

const NavigationBar =()=> {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#" className='w-50'>
          <img src="https://i.ibb.co/Phgcstt/kisspng-logo-information-technology-vector-graphics-royalt-5ccb565cc91a76-3238063115568297888237-rem.png" style={{width: '15%'}} />
          <span className='fs-3 fw-semibold text-success mt-5'>Skill Curves</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto gap-3 my-2 my-lg-0 fw-semibold"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="nav-link active" to="/">Home</NavLink>
            
            <NavLink className="active nav-link" to="/courses">
              Course
            </NavLink>
            <NavLink className="active nav-link" to="/categories">
              Categories
            </NavLink>
            <NavLink className="active nav-link" to="/about">
              About
            </NavLink>
          </Nav>
          <Form className="d-flex">
            {/* <Button variant="success" className="p-2 px-4 fs-5">Sign In</Button> */}
            <Button iconData={<i className="bi bi-box-arrow-in-right me-1"></i>} textdata="Sign In" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;