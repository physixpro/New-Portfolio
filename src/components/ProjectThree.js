import React, {Component} from 'react';
import xboxOne from "./xboxOne.jpg";
import xboxTwo from "./xboxTwo.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class ProjectThree extends Component {
    constructor(){
        super();

        this.state={
            box: <img src={xboxTwo} width="600" />
        }
        this.handleMouseOver=this.handleMouseOver.bind(this);
        this.handleMouseOut=this.handleMouseOut.bind(this);
    }
    handleMouseOver(){
        this.setState({
            box: <img src={xboxOne} width="600"/>
        });
        console.log("Mouse Over Fired");
    }

    handleMouseOut(){
        this.setState({
            box: <img src={xboxTwo}width="600"/>
        });
        console.log("Mouse Out Fired");
    }

    render(){
        return(
            <ScrollAnimation animateIn="fadeIn">

<div className = "boxes-grid-two">
    <a id="fixing-box-three" href="https://www.keaganstrose.com/indexskyrim.html" target="_blank">
<div className="box-2" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.box}</div></a>
<h2 id='info-two'> My First Website built to display UI skills </h2>

           </div> </ScrollAnimation>
        )
    }
}

export default ProjectThree;