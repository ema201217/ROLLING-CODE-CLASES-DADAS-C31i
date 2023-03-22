import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{width:'60px'}} src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <NavDropdown title="Contadores" id="basic-nav-dropdown">
              <NavDropdown.Item to="/counterV1" as={Link}>Contador V1</NavDropdown.Item>
              <NavDropdown.Item to="/counterV2" as={Link}>
                Contador V2
              </NavDropdown.Item>
              <NavDropdown.Item to="/counterV3" as={Link}>Contador V3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Buscador de Giphy" id="basic-nav-dropdown">
              <NavDropdown.Item to="/giphyV1" as={Link}>Buscado GIF</NavDropdown.Item>
              <NavDropdown.Item to="/giphyv2" as={Link}>
              Buscado GIF 2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
