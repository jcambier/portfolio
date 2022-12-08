import './Responsive.css';
import Ruler from './images/ruler.png';
import Figure from 'react-bootstrap/Figure'
import { Nav } from 'react-bootstrap';
import Balsamiq from './images/2022-10-12.png';
import { Card } from 'react-bootstrap';

export default function Responsive() {
    return(
        <div className='jumbotron5'>
            <div className='rico-content' id='responsive'>
                <div className='left-rico'>
                    <div className='rico-header'>
                        <img src={Ruler} className='rico-image'></img>
                        <h1 className='about-header'>Responsive Redesign</h1>
                        <img src={Ruler} className='rico-image'></img>
                    </div>
                    <div className='rico-context'>
                        <h3 className='underline'>Context</h3>
                        <h4 className='overwrite-bold'>This project involved redesigning an old website with usability issues.
                        I chose poetrynook.com, which I had used before in high school. The homepage also has plenty of issues with
                        efficiency, learnability, and memorability (see the link to my project below to learn more). One of the
                        main goals of the project was to make the website more responsive to different screen sizes. I
                        accomplished this by having certain elements disappear or collapse on an tablet or phone. Also, I got
                        another chance to improve my prototyping skills.
                        </h4>
                    </div>
                    <div className='process'>
                        <h3 className='underline'>Design Notes and Process</h3>
                        <ul>
                            <li className='overwrite-size'>First, I worked on my low-fidelity prototypes, taking usability issues into
                            consideration.</li>
                            <li className='overwrite-size'>Next, I made a visual design guide and high-fidelity prototype.</li>
                            <li className='overwrite-size'>I tried to keep all of my colors cohesive and the hierarchy of the
                            page clear.</li>
                            <li className='overwrite-size'>Lastly, I turned my prototype into a real, responsive version of the old
                            website with HTML and CSS.</li>
                        </ul>
                    </div>
                    <div className='takeaways'>
                        <h3 className='underline'>Takeaways</h3>
                        <h4 className='overwrite-bold'>This project allowed me to explore and better understand usability concerns.
                        The WebAIM report done on the old website presented more issues than I ever could have guessed on my own.
                        It's important to make sure that your website is easy to use and that everything is presented clearly. Good
                        design choices can also help make an app more engaging and fun.
                        </h4>
                    </div>
                    <div className='link'>
                        <h3 className='underline'>Links:</h3>
                        <Nav variant="pills" className='nav-button'>
                            <Nav.Item>
                            <Nav.Link eventKey="1" href="https://stinkytortoise420.github.io/Responsive-Redesign-Handin/">
                                Project Overview
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav variant="pills" className='nav-button'>
                            <Nav.Item>
                            <Nav.Link eventKey="1" href="https://www.poetrynook.com/">
                                Old Website
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav variant="pills" className='nav-button'>
                            <Nav.Item>
                            <Nav.Link eventKey="1" href="https://stinkytortoise420.github.io/Responsive-Redesign/">
                                Redesigned Website
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className='right-rico'>
                    <Figure>
                        <Figure.Image src={Balsamiq}></Figure.Image>
                        <Figure.Caption className='caption'>One of my original low-fidelity prototypes, made with Balsamiq</Figure.Caption>
                    </Figure>
                    <Card className='code-card'>
                        <Card.Title>CSS Snippet (scroll to see more!)</Card.Title>
                        <Card.Text>Describes the strategy behind turning my prototype into a real, responsive website</Card.Text>
                        <code>
                            /* The object that contains the three central columns */<br/>
                            .main {'{'}<br/>
                            &emsp;display: flex;<br/>
                            &emsp;flex-direction: row;<br/>
                            &emsp;flex-wrap: wrap;<br/>
                            &emsp;justify-content: center;<br/>
                            &emsp;padding: 10px;<br/>
                            &emsp;margin-top: 3%;<br/>
                            {'}'}<br/><br/>
                            /* The styling for each of the columns from left to right */<br/>
                            .col1 {'{'}<br/>
                            &emsp;background-color: rgba(244, 175, 175, 0.6);<br/>
                            &emsp;width: 30%;<br/>
                            {'}'}<br/><br/>
                            .col2 {'{'}<br/>
                            &emsp;background-color: rgba(244, 175, 175, 0.936);<br/>
                            &emsp;width: 30%;<br/>
                            {'}'}<br/><br/>
                            .col3 {'{'}<br/>
                            &emsp;background-color: rgba(244, 175, 175, 0.84);<br/>
                            &emsp;width: 30%;<br/>
                            {'}'}<br/><br/>
                            /* Describes the layout of the objects within each column */<br/>
                            .col-content {'{'}<br/>
                            &emsp;display: flex;<br/>
                            &emsp;flex-direction: column;<br/>
                            &emsp;justify-content: start;<br/>
                            &emsp;row-gap: 10px;<br/>
                            &emsp;padding: 10px;<br/>
                            {'}'}<br/><br/>
                            /* Example of a media tag that makes the website's slogan disappear on small screens */<br/>
                            @media screen and (max-width: 719px) {'{'}<br/>
                            &emsp;.slogan {'{'}<br/>
                            &emsp;&emsp;display: none;<br/>
                            &emsp;{'}'}<br/>
                            {'}'}
                        </code>    
                    </Card>                    
                </div>
            </div>
            <div className='responsive-stats'>
                <h5>Tools Used: HTML, CSS, Figma, Balsamiq</h5>
                <h5>Team: Solo</h5>
                <h5>Completed In: 2 weeks</h5>
            </div>
        </div>
    );
}