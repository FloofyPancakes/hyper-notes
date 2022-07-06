import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Nav from 'react-bootstrap/esm/Nav';
import Button from 'react-bootstrap/Button'
import { BsPlus} from "react-icons/bs";
import { BsArrowUpRight} from "react-icons/bs";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { BsFillTerminalFill } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Hyper Notes</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-secondary" > <BsPlus/> </Button>{' '}
            <Button variant="outline-secondary"> <BsArrowUpRight/> </Button>
            <Button variant="outline-secondary"> <BsFillFileEarmarkFill/> </Button>
            <Button variant="outline-secondary"> <BsFillTerminalFill/> </Button>
          </Nav>
        </Navbar.Collapse>
        
        <Button variant="outline-secondary"> <BsGearFill/> </Button>
      </Container>

    </Navbar>
  );
}
    

export default Header;