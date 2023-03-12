import { Container, Navbar, Form } from "react-bootstrap";

export const Header = ({ modeActive, onDarkMode, checked }) => {
  console.log(checked)
  return (
    <Navbar bg={modeActive}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://www.agro4jobs.com/tenancy/assets/images/logo-empresa-default.png"
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Dark Mode"
            isInvalid={!checked}
            isValid={checked}
            onChange={onDarkMode}
          />
        </Form>
      </Container>
    </Navbar>
  );
};