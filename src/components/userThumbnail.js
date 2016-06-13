import React from 'react';
import { render } from 'react-dom';
import UserProfile from './userProfile.js';

export default class UserThumbnail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {focussed: false}
        this.thumbnailClick = this.thumbnailClick.bind(this)
    };

    thumbnailClick() {
        console.log(this.props.userData.name);
        if (this.state.focussed) {
            this.setState({ focussed: false })
        } else {
            this.setState({ focussed: true })
        }
    };

    render() {
        return (
            <div className="user_thumbnail" onClick={this.thumbnailClick}>
                {this.state.focussed ? <UserProfile className="user_profile_container" userData={this.props.userData} /> : null}
                <span>{this.props.userData.name}</span>
                <img src={this.props.userData.preview_pic.url} />
            </div>
        )
    };
}