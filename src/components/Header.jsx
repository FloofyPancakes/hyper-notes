import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/esm/Nav';
import Button from 'react-bootstrap/Button'
import { BsDiagram2Fill, BsPlus} from "react-icons/bs";
import { BsArrowUpRight} from "react-icons/bs";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { BsFillTerminalFill } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { BsReplyFill } from "react-icons/bs";
function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><span style={{fontSize: "25px"}}>Hyper Notes</span></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="p-2">
              <Button variant="outline-secondary" className="m-1"> <BsPlus className="mb-1" /> </Button>
              <Button variant="outline-secondary" className="m-1"> <BsArrowUpRight className="mb-1"/> </Button>
              <Button variant="outline-secondary" className="m-1"> <BsFillFileEarmarkFill className="mb-1"/> </Button>
              <Button variant="outline-secondary" className="m-1"> <BsFillTerminalFill className="mb-1"/> </Button>
              <Button variant="outline-secondary" className="m-1"> <BsDiagram2Fill className="mb-1"/> </Button>
              <Button variant="outline-secondary" className="m-1"> <BsReplyFill className="mb-1"/> </Button>
 
            </div>

          </Nav>
        </Navbar.Collapse>
        
        <Button variant="outline-secondary"> <BsGearFill className="mb-1"/> </Button>
      </Container>

    </Navbar>
  );
}
    
export default Header;
