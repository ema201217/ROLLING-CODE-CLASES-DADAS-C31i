import { Container, Nav, Navbar } from "react-bootstrap";
import { SearchBar } from "./SearchBar";

export const Header = ({onInputValue}) => {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Mis Practicas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <SearchBar onInputValue={onInputValue}/>
      </Container>
    </Navbar>
  );
};
