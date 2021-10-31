import Events from "./Events";
import Members from "./Members";
import styles from "./Header.module.css";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="me-auto">
              <div className={styles.logo}>
                <Link to="/" exact>
                  <div className={styles.logo}>OSS</div>
                </Link>
              </div>
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
      <Switch>
        <Route path="/" exact />
        <Route path="/events" exact>
          <Events />
        </Route>
        <Route path="/members" exact>
          <Members />
        </Route>
        <Route path="/about" exact></Route>
        <Route path="/contact" exact></Route>
      </Switch>
    </>
  );
}

export default Header;
