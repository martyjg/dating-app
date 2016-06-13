import React from 'react';
import { render } from 'react-dom';

export default class UserThumbnail extends React.Component {

    constructor(props) {
        super(props)
        this.thumbnailClick = this.thumbnailClick.bind(this)
    };

    thumbnailClick() {
        console.log(this.props.userData.name);
    };

    render() {
        return (
            <div className="user_thumbnail" onClick={this.thumbnailClick}>
                <span>{this.props.userData.name}</span>
                <img src={this.props.userData.preview_pic.url} />
            </div>
        )
    };
}