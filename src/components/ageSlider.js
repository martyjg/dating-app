import React from 'react';
import { render } from 'react-dom';
import Slider from 'material-ui/Slider';

//Immutability helper for simplifying object mutation
var update = require('react-addons-update');

export default class AgeSlider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sliders: {firstSlider: 18, secondSlider: 30},
            functional: true
        }
        this.handleFirstSlider = this.handleFirstSlider.bind(this)
        this.handleSecondSlider = this.handleSecondSlider.bind(this)
    };

    handleFirstSlider(event, value) {
        this.setState({
            sliders: update(this.state.sliders, {firstSlider: {$set: value}})
        })
    };

    handleSecondSlider(event, value) {
        this.setState({
            sliders: update(this.state.sliders, {secondSlider: {$set: value}})
        })
    };


    render() {
        return (
            <div>
                <div className="slider_container">
                    <p className="first_slider_details">
                        <span>{'Min age: '}</span>
                        <span>{this.state.sliders.firstSlider}</span>
                        <span>{' from a range of 18 to 30'}</span>
                    </p>
                    <Slider className="slider"
                        min={18}
                        max={30}
                        step={1}
                        defaultValue={18}
                        value={this.state.sliders.firstSlider}
                        onChange={this.handleFirstSlider}
                    />
                </div>
                <div className="slider_container">
                    <p className="second_slider_details">
                        <span>{'Max age: '}</span>
                        <span>{this.state.sliders.secondSlider}</span>
                        <span>{' from a range of 18 to 30'}</span>
                    </p>
                    <Slider className="slider"
                        min={18}
                        max={30}
                        step={1}
                        defaultValue={30}
                        value={this.state.sliders.secondSlider}
                        onChange={this.handleSecondSlider}
                    />
                </div>
            </div>
        )
    };
}