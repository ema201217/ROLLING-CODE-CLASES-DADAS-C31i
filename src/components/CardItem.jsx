import { Card } from "react-bootstrap"

export const CardItem = ({title,img}) => {
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="http://www.energyfit.com.mk/wp-content/plugins/ap_background/images/default/default_large.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
  )
}