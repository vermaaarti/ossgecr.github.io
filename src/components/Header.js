import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className={styles.header}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand className="me-auto">
            <Link to="/" exact>
              <div className={styles.logo}>OSS</div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link>
                <Link to="/events">Events</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/members">Members</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
            <div className="d-flex justify-content-evenly">
              <Nav className="m-auto">
                <Nav.Link>
                  <div className={styles.card}>
                    <Link to="/login">Login</Link>
                  </div>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
