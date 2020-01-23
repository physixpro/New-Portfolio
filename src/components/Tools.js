import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

class Tools extends Component{
    render(){
        return(
            <div className='grid-3'>
                <h1 id='tools'>TOOLS I USE&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTools} /></h1>
                <ul id="list-1">
                    <li>REACT.JS</li>
                    <li>EXPRESS.JS</li>
                    <li>NODE.JS</li>
                    <li>MYSQL DATABASE</li>
                    <li>MONGO DB</li>
                </ul>
                <ul id="list-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>PHOTOSHOP</li>
                    <li>GIT</li>
                    <li>NETIFY</li>
                </ul>
                {/* <p id='para-two'>

                 MongoDB, React.JS, Express.JS,Node.JS , MySql Database 
                    </p>
                    <p id='para-three'>
                        HTML, CSS, SASS, PhotoShop , GIT for version control
        </p>*/}
                   
            </div>
        )
    }
}

export default Tools;