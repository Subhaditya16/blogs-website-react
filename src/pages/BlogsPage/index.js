import { Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import "./blogs-page.css";
import BlogCards from "../../components/Cards";
import Footer from "../../components/Footer";

function Blogs() {
  return (
    <Container fluid className="blogs-page">
      <Row>
        <Header />
      </Row>
      <Row className="blogs-page-body">
        <p>Heres all the Blogs</p>
      </Row>
      <Container className="blogs-page-main">
        <Row>
          <BlogCards text="Text" title="Blog1" />
        </Row>
      </Container>
      <Row className="blogs-page-footer">
        <Footer />
      </Row>
    </Container>
  );
}

export default Blogs;
