import "./landing-page.css";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import BlogCards from "../../components/Cards";
import { Col, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container fluid className="landing-page">
      <Row>
        <Header />
      </Row>
      <Row className="landing-page-body">
        <p>Blogs</p>
      </Row>
      <Row className="landing-page-blogs justify-content-center align-items-center">
        <BlogCards title="Blog1" text="Text1" />
        <BlogCards title="Blog2" text="Text2" />
        <BlogCards title="Blog3" text="Text3" />
      </Row>
      <Row className="landing-page-socials">
        <Socials />
      </Row>
      <footer style={{color: 'white'}}>
        Copyright Subhaditya Bhattacharjee
      </footer>
    </Container>
  );
};

export default LandingPage;
