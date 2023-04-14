import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../Layouts/layout";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import bcrypt from 'bcryptjs'

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkComponent = styled(Link)`
  color: #248626;
  transition: 0.35s;
  &:hover {
    color: #038605;
  }
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const redirect = useNavigate();

  /* MANEJADOR */
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Ingresar email y contraseña");
      return;
    }

    const res = await fetch(`http://localhost:3001/users?email=${email}`);
    const user = await res.json();
    const userObj = user[0];

    if (!userObj) {
      setError("El usuario no esta registrado");
      return;
    }


    // if (password /* 1234 */ !== userObj.password) { /* $2a$10$M9UYBgyKa.uSgUknlenLBOcVbHIHHw23O.Ckt/iJvP9N/CXn6Eh22 */
    //   setError("Credenciales Invalidas");
    //   return;
    // }

    const isPasswordValid = bcrypt.compareSync(password, userObj.password)
    if(!isPasswordValid){
      setError("El password es invalido");
      return;
    }

    error ? setError("") : null;
    setUser(userObj);
    redirect("/user/profile");
  };

  return (
    <Layout>
      <Container className="my-4">
        <Row>
          <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
            <h1 className="text-center">INICIO DE SESIÓN</h1>
          </Col>
          <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Colocar Correo electrónico"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="Colocar Contraseña"
                />
              </Form.Group>
              <p className="text-danger">{error}</p>
              <ContainerButton>
                <LinkComponent to="/register">
                  No estoy registrado
                </LinkComponent>

                <Button variant="primary" type="submit">
                  Iniciar Sesión
                </Button>
              </ContainerButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
