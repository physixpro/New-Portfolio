import React, {Component} from 'react';
import aOne from "./aOne.jpg";
import aTwo from "./aTwo.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class ProjectOne extends Component {
    constructor(){
        super();
        this.state={
            box: <img src={aOne} id="img"width="600"/>
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(){
        this.setState({
            box: <img src = {aTwo} width="600"/>
        });
        console.log('mouse over fired');
    }

    handleMouseOut(){
        this.setState({
            box: <img src={aOne} width='600'/>
        });
        console.log('mouse out fired')
    }

    render(){
        return(
<ScrollAnimation animateIn="fadeIn">

<div className="boxes-grid">
<div className="box-1" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}> {this.state.box}  </div>
<h2 id='title-one'>VIEW SOURCE CODE ON GITHUB</h2>
<h2 id='info-1'>First Freelance Job done for the fitness Gym Soon To Launch In NYC , Blaque Inc. </h2>


      </div>
</ScrollAnimation>
        )
    }
}
export default ProjectOne;