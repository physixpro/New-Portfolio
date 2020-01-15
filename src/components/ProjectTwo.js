import React, {Component} from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import bOne from "./bOne.jpg";
import bTwo from './bTwo.jpg';

class ProjectTwo extends Component {

    constructor(){
        super();
        this.state={
            box: <img src={bOne} width="600"/>
        }
        this.handleMouseOver=this.handleMouseOver.bind(this);
        this.handleMouseOut=this.handleMouseOut.bind(this);
    }
    
    handleMouseOver(){
        this.setState({
            box: <img src={bTwo} width="600"/>
        });
        console.log("Mouse Over Fired");
    }

    handleMouseOut(){
        this.setState({
            box: <img src={bOne}width="600"/>
        });
        console.log("Mouse Out Fired");
    }

    render(){
        return(
            <ScrollAnimation animateIn="fadeIn">
<div className = "boxes-grid-two">

<div className="box-2" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.box}</div>
<h2 id='title-two'>VIEW SOURCE CODE ON GITHUB</h2>
<h2 id='info-two'>  Website built to display UI skills</h2>

           </div> </ScrollAnimation>
            

            
        )
    }

}

export default ProjectTwo;