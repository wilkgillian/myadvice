import Link from 'next/link';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className={styles.container}>
      <Container fluid className="p-2">
        <Link href="/" passHref>
          <Navbar.Brand className="mx-3">
            My<strong>Advice</strong>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          <div className={styles.box}>
            <Image
              src="http://github.com/wilkgillian.png"
              alt="image"
              height={50}
              roundedCircle={true}
            />
            <span>Wilk Gillian</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
