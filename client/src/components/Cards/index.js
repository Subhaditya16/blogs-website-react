import { Card, Button } from "react-bootstrap";
function BlogCards({title, text}) {

  return (
    <Card>
      <Card.Img variant="top" src="wallpaper.jpg" />
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
