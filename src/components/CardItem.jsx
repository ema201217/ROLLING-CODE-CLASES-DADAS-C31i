import { Card, Col } from "react-bootstrap";

export const CardItem = ({ title, image }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={image} style={{height:"200px",objectFit:'cover'}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
