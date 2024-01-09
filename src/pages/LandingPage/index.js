import "./landing-page.css";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import { Col, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container fluid className="landing-page">
      <Row>
        <Header />
      </Row>
      <Row xs="auto" className="landing-page-body">
        <Col xs={2}><img src="display-picture.jpg" className="display-picture" /></Col>
        <Col xs={10}><p className="display-text">Hey There, Subhaditya Here!</p></Col>
      </Row>
      <Row className="landing-page-socials">
        <Socials />
      </Row>
      <footer>
        Copyright Subhaditya Bhattacharjee
      </footer>
    </Container>
  );
};

export default LandingPage;
