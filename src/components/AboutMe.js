import React, { Component } from "react";
import interview from "./interview.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';


class AboutMe extends Component {
  render() {
    return (
      <div className="grid-two">
        
        <h1 id='about'>
            ABOUT ME
            </h1>
          <p id='paragraph-one'>
          I first discovered code while doing my Physics Major, during that time
          I had a brief introduction to it and it started from there. I went on
          to discover my love for full stack web development later on my own and
          have been working very hard to achieve my goals. I am highly
          mottivated and self driven. If there is something unknown to me, given
          time to myself i usually figure it out before long and make use of it
          on my projects. I can build in the M.E.R.N. stack but can become
          comfortable with anything given time to read through the
          documentation
          </p>
       <h1 id="parts-one">Fast Learner <FontAwesomeIcon icon={faBook} /></h1>
       <p id="part-1">I have a curious nature that allows me to happily sit and learn new ideas</p>
       <h1 id='parts-two'>Commited<FontAwesomeIcon icon={faHandshake} /></h1>
       <p id="part-2">If you need someone that is instrinsicly motivated and can commit to a team and tasks then that describes me perfectly </p>
       <h1 id="parts-three">Attention To Detail<FontAwesomeIcon icon={faGlasses} /></h1>
       <p id="part-3">I focus on small things and try to make whatever i  build function well. I focus on quality rather than quantity</p>
        
        
      </div>
    );
  }
}
export default AboutMe;
