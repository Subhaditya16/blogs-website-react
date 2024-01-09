import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Subhaditya
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={() => navigate("/about")} href="/about">
          About
        </Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/blogs">Blogs</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
