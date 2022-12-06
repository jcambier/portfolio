import 'bootstrap/dist/css/bootstrap.css';
import './Bar.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function scrollToProject(id) {
    document.getElementById(id).scrollIntoView({block: "end"});
}

export default function Bar() {
    return (
    <Navbar bg="light" expand="lg" fixed="top">
        <Container>
        <Navbar.Brand>Jared Cambier's CS1300 Portfolio</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link onClick={() => scrollToProject('about')}>About Me</Nav.Link>
            <Nav.Link onClick={() => scrollToProject('pokemon')}>Pokemon Team Creator</Nav.Link>
            <Nav.Link onClick={() => scrollToProject('ricochet')}>Ricochet Robots</Nav.Link>
            <Nav.Link onClick={() => scrollToProject('iterative')}>Iterative Design</Nav.Link>
            <Nav.Link href="#pricing">Responsive Redesign</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    );
}