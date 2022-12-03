import './Pokemon.css';
import pokeball from './images/pokeball.png';
import thumbnail from './images/2022-12-03.png';
import Figure from 'react-bootstrap/Figure'
import { Nav } from 'react-bootstrap';

export default function Pokemon() {
    return (
        <div className='jumbotron2'>
            <div className='pokemon-content'>
                <div className='left'>
                    <Figure>
                        <Figure.Image src={thumbnail}></Figure.Image>
                        <Figure.Caption className='caption'>The completed application</Figure.Caption>
                    </Figure>
                </div>
                <div className='right-pmon' id='pokemon'>
                    <div className='pokemon-header'>
                        <img src={pokeball} className='pokeball-image'></img>
                        <h1 className='about-header'>Pokemon Team Creator</h1>
                        <img src={pokeball} className='pokeball-image'></img>
                    </div>
                    <div className='context'>
                        <h3 className='underline'>Context:</h3>
                        <h4>This is the beginning of a Pokemon team creator. When building competitive teams, trainers will want
                            to compare the stats of different Pokemon. This app allows you to filter from a preliminary list of 12
                            Pokemon based on type and nature. You can also sort the Pokemon by their attack stat. In general, if this
                            design were extended, it could be a helpful teambuilding tool. 
                        </h4>
                    </div>
                    <div className='process'>
                        <h3 className='underline'>Design Notes and Process:</h3>
                        <ul>
                            <li className='overwrite-size'>Started by creating the Pokemon component within React and implementing each card</li>
                            <li className='overwrite-size'>Then, added the filter functions at the top of the page</li>
                            <li className='overwrite-size'>Cards use mix of headers and paragraph elements to create a hierarchy</li>
                            <li className='overwrite-size'>Utilized contrasting colors and decreased background saturation to increase readability</li>
                            <li className='overwrite-size'>To add new Pokemon, you would just have to input all of the data into a csv or json</li>
                        </ul>
                    </div>
                    <div className='takeaways'>
                        <h3 className='underline'>Takeaways:</h3>
                        <h4>This project helped me improve my understanding of React. After this project, I felt comfortable
                            working with components and state variables. I also felt good having completed a project that is
                            hopefully fun, engaging, and useful.
                        </h4>
                    </div>
                    <div className='link'>
                        <h3 className='underline'>Link:</h3>
                        <Nav variant="pills" className='nav-button'>
                            <Nav.Item>
                            <Nav.Link eventKey="1" href="https://stinkytortoise420.github.io/Development/">
                                Open
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </div>
            <div className='stats'>
                <h5>Tools Used: React, HTML, CSS, MaterialUI</h5>
                <h5>Team: Solo</h5>
                <h5>Completed In: 1 week</h5>
            </div>
        </div>
    );
}