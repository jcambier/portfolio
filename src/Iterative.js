import './Iterative.css';
import palette from './images/palette.png';
import prototype from './images/2022-12-05.png';
import Figure from 'react-bootstrap/Figure'
import { Nav } from 'react-bootstrap';

export default function Iterative() {
    return(
        <div className='jumbotron4'>
            <div className='pokemon-content'>
                <div className='left'>
                    <Figure>
                        <Figure.Image src={prototype}></Figure.Image>
                        <Figure.Caption className='caption'>The video editing page of our prototype</Figure.Caption>
                    </Figure>
                </div>
                <div className='right-pmon' id='iterative'>
                    <div className='pokemon-header'>
                        <img src={palette} className='pokeball-image'></img>
                        <h1 className='about-header'>Iterative Design</h1>
                        <img src={palette} className='pokeball-image'></img>
                    </div>
                    <div className='context'>
                        <h3 className='underline'>Context</h3>
                        <h4 className='overwrite-bold'>For this project, we began by selecting an interesting startup from YCombinator. We decided to go
                            with Ozone. They offer a software product which their page describes as "Figma for video." Click&nbsp;
                            <a href="https://www.ozone.pro/" className='underline'>here</a> to navigate to the company's website. We started this project by making a series of low-fidelity
                            prototypes, discovering that they can be a quick and easy way to come up with useful ideas. Next,
                            we made an interactive high-fidely prototype using Figma. Lastly, after receiving critiques on our
                            design from our peers, we put our prototype through a round of testing on UserTesting.com.
                        </h4>
                    </div>
                    <div className='process'>
                        <h3 className='underline'>Design Notes and Process</h3>
                        <ul>
                            <li className='overwrite-size'>First, we brainstormed ideas through the creation of low-fidelity prototypes.</li>
                            <li className='overwrite-size'>These prototypes were developed into one high-fidelity prototype.</li>
                            <li className='overwrite-size'>I discovered how important a consistent theme and color palette are in making an app
                            feel "complete."</li>
                            <li className='overwrite-size'>Features include built-in video calling and chat, project sharing, and clip "locking."</li>
                        </ul>
                    </div>
                    <div className='takeaways'>
                        <h3 className='underline'>Takeaways</h3>
                        <h4 className='overwrite-bold'>This project was a great opportunity to practice my skills in interface design. Additionally, it was
                            interesting to discover the significant difference between my mental model of how the app should work and the mental
                            models of several of our testers. Overall, this round of testing allowed us to make changes to our app that
                            increased usability.
                        </h4>
                    </div>
                    {/* <div className='link'>
                        <h3 className='underline'>Project Link:</h3>
                        <Nav variant="pills" className='nav-button'>
                            <Nav.Item>
                            <Nav.Link eventKey="1" href="https://existentialelephant000.github.io/iterative-design-handin/">
                                Open
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div> */}
                </div>
            </div>
            <div className='iterative-stats'>
                <h5>Tools Used: Figma, Peer Review, User Testing</h5>
                <h5>Team: Jackson Ho, Isabelle Towle, Jared Cambier, Jesse Gallant</h5>
                {/* <h5>Team: Anonymous team of 4</h5> */}
                <h5>Completed In: 2 weeks</h5>
            </div>
        </div>
    );
}