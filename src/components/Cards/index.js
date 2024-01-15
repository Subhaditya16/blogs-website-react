import { Card, Button } from "react-bootstrap";
function BlogCards({title, text}) {

  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="display-picture.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCards;
