import './Ricochet.css';
import robot from './images/robot.png.crdownload';
import thumbnail from './images/2022-12-03.png';
import Figure from 'react-bootstrap/Figure'
import { Nav } from 'react-bootstrap';

export default function Ricochet() {
    return(
        <div className='jumbotron3'>
            <div className='rico-content'>
                <div className='left-rico' id='ricochet'>
                <div className='rico-header'>
                        <img src={robot} className='rico-image'></img>
                        <h1 className='about-header'>Ricochet Robots</h1>
                        <img src={robot} className='rico-image'></img>
                    </div>
                </div>
                <div className='right-rico'>

                </div>
            </div>
        </div>
    );
}