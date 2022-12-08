import './BottomBar.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Github from './images/GitHub-Mark.png';
import LinkedIn from './images/linkedin.png';

export default function BottomBar() {
    return(
        <Navbar bg="light" expand="lg" className="bottom-bar">
            <div className='social-links'>
                <Navbar.Brand>Thank you for reading my portfolio!</Navbar.Brand>
                <Nav>
                    <Nav.Item>   
                        <Nav.Link href='https://github.com/' className='nav-item'>
                            <img src={Github} className='icon'></img>
                        </Nav.Link>
                    </Nav.Item>   
                    <Nav.Item>
                        <Nav.Link href='https://www.linkedin.com/' className='nav-item'>
                            <img src={LinkedIn} className='icon'></img>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    );
}