import "./landing-page.css";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import BlogCards from "../../components/Cards";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <Container fluid className="landing-page">
      <Row>
        <Header />
      </Row>
      <Row className="landing-page-body">
        <p>Blogs</p>
      </Row>
      <Row xs={1} md={3} className="landing-page-blogs g-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Col key={i}>
            <BlogCards title="Blog" text="Text" />
          </Col>
        ))}
      </Row>
      <Row className="landing-page-socials">
        <Socials />
      </Row>
      <Row className= "landing-page-footer">
        <Footer />
      </Row>
    </Container>
  );
};

export default LandingPage;
