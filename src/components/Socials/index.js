import { Container, Row, Col } from "react-bootstrap";
import './socials.css'

function Socials() {
  return (
    <Container>
      Connect With Me:
      <Row xs="auto" className="justify-content-center align-items-center">
        <Col>
          <img src="./facebook@2x.png" className="icons"></img>
        </Col>
        <Col>
          <img src="./instagram@2x.png"className="icons"></img>
        </Col>
        <Col>
          <img src="./twitterx@2x.png" className="icons"></img>
        </Col>
      </Row>
      <Row xs="auto" className="justify-content-center align-items-center">
        <Col>
          <img src="./linkedin@2x.png" className="icons"></img>
        </Col>
        <Col>
          <img src="./github@2x.png" className="icons"></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Socials;
