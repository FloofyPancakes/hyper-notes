import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/esm/Nav';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
        <DropdownButton
          variant="outline-secondary"
          // bsStyle="default"
          // title="No caret"
          title={<BsGearFill className="mb-1"/>}
          caret
          id="dropdown-no-caret"
        >
          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
          <Dropdown.Item eventKey="3">Action 3</Dropdown.Item>
          <Dropdown.Item eventKey="4">Action 4</Dropdown.Item>
          <Dropdown.Item eventKey="5">Action 5</Dropdown.Item>
          <Dropdown.Item eventKey="6">Action 6</Dropdown.Item>
        </DropdownButton>

      </Container>

    </Navbar>
  );
}
    
export default Header;
