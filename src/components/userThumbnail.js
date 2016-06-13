import React from 'react';
import { render } from 'react-dom';

export default class UserThumbnail extends React.Component {

    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="user_thumbnail">
                <span>{this.props.userData.name}</span>
                <img src={this.props.userData.preview_pic.url} />
            </div>
        )
    };
}