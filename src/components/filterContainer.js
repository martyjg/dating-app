import React from 'react';
import { render } from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AgeSlider from './ageSlider.js'

const darkMuiTheme = getMuiTheme(darkBaseTheme);

export default class FilterContainer extends React.Component {

    valuesChanged(value) {
        this.props.ageValuesChanged(value);
    };

    render() {
        return (
            <div className="filter_container">
                <MuiThemeProvider muiTheme={darkMuiTheme}>
                    <AgeSlider sendBackSliders={this.valuesChanged.bind(this)}/>
                </MuiThemeProvider>
            </div>
        )
    };
}