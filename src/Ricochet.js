import './Ricochet.css';
import robot from './images/robot.png.crdownload';
import thumbnail from './images/2022-12-03.png';
import Figure from 'react-bootstrap/Figure'
import { Nav } from 'react-bootstrap';
import Board from './images/BoardImage.png';
import Red from './images/RedRobot.png';
import Green from './images/GreenRobot.png';
import Blue from './images/BlueRobot.png';
import Yellow from './images/YellowRobot.png';

export default function Ricochet() {
    return(
        <div className='jumbotron3'>
            <div className='rico-content' id='ricochet'>
                <div className='left-rico'>
                    <div className='rico-header'>
                        <img src={robot} className='rico-image'></img>
                        <h1 className='about-header'>Ricochet Robots</h1>
                        <img src={robot} className='rico-image'></img>
                    </div>
                    <div className='rico-context'>
                        <h3 className='underline'>Context</h3>
                        <h4 className='overwrite-bold'>For this project, I worked in a team of five to remake the strategy board game Ricochet Robots. In
                            general, the goal of the game is to move a particular robot to one of the symbols on the board in the
                            lowest possible number of moves. If a robot starts moving in one direction, it cannot stop until it
                            hits a wall or the edge of the board. Click&nbsp;
                             <a href="https://www.ultraboardgames.com/ricochet-robots/game-rules.php" className='underline'>here</a> to learn more about
                            how the game works. My job for this project was to work on the frontend. In particular, I created the menu and lobby
                            systems and implemented much of the game's functionality. I also worked with the other students on my team to integrate different aspects of our project
                            together using API calls.
                        </h4>
                    </div>
                    <div className='process'>
                        <h3 className='underline'>Design Notes and Process</h3>
                        <ul>
                            <li className='overwrite-size'>I started by creating the menu and lobby interfaces. I tried to make them
                            both simple to enhance learnability.</li>
                            <li className='overwrite-size'>Afterwards, I started working on board visualization. The backend would randomly
                            generate a board which would then be sent to the frontend and displayed.</li>
                            <li className='overwrite-size'>Next, I worked on implmenting robot movement on the press of an arrow key.
                            I learned how important it is to be efficient with re-rendering your page in React. When we reloaded
                            all of our images after each move-- including the board itself-- our game started lagging.</li>
                            <li className='overwrite-size'>Lastly, we finished up the game by implementing multiplayer.</li>
                        </ul>
                    </div>
                    <div className='takeaways'>
                        <h3 className='underline'>Takeaways</h3>
                        <h4 className='overwrite-bold'>Overall, this is one of my favorite projects that I've participated in. I learned so much about how to
                            make a complex web app using React, and the game turned out to be fun in the end. Also, we designed the 
                            app with the preferences of stakeholders in mind. Specifically, we were proud of our multiplayer
                             feature and thought that it would be particularly interesting to people who have played the real board game
                             before.
                        </h4>
                    </div>
                    <div className='link'>
                        <h3 className='underline'>Project Link:</h3>
                        <Nav variant="pills" className='nav-button'>
                            <Nav.Item>
                            <Nav.Link eventKey="1" href="https://ricochettest1.herokuapp.com/">
                                Open
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className='right-rico'>
                    <Figure>
                        <Figure.Image src={Board}></Figure.Image>
                        <Figure.Caption className='caption'>Our game board, designed in Figma by [team member]</Figure.Caption>
                    </Figure>
                        <Figure>
                            <div className='robots-container'>
                            <Figure.Image src={Red}></Figure.Image>
                            <Figure.Image src={Green}></Figure.Image>
                            <Figure.Image src={Blue}></Figure.Image>
                            <Figure.Image src={Yellow}></Figure.Image>
                            </div>
                            <Figure.Caption className='caption'>The robots, which would be rendered on top of the board</Figure.Caption>
                        </Figure>
                </div>
            </div>
            <div className='rico-stats'>
                <h5>Tools Used: React, Java, Notion</h5>
                {/* <h5>Team: Aaron Igra, Eric Tang, Jared Cambier, Justin Zhu, and Spencer Delllenbaugh</h5> */}
                <h5>Team: Anonymous team of 5</h5>
                <h5>Completed In: 4 weeks</h5>
            </div>
        </div>
    );
}