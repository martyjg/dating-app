import React from 'react';

import UserProfile from './userProfile.js';

export default class UserThumbnail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {focussed: false, onlineStatus: "online"}
        this.thumbnailClick = this.thumbnailClick.bind(this)
        this.checkStatus = this.checkStatus.bind(this)
    };

    thumbnailClick() {
        if (this.state.focussed) {
            this.setState({ focussed: false })
        } else {
            this.setState({ focussed: true })
        }
    };

    checkStatus() {
        if (this.props.userData.online_status === "ONLINE") {
            this.setState({ onlineStatus: "online" })
        } else {
            this.setState({ onlineStatus: "offline" })
        }
    }

    componentDidMount() {
        this.checkStatus();
    };




    render() {

        var onlineStatusClass = 'user_thumbnail_image ' + this.state.onlineStatus;
        var imageSource = { backgroundImage: 'url(' + this.props.userData.preview_pic.url + ')' };

        return (
            <div className="user_thumbnail" onClick={this.thumbnailClick}>
                {this.state.focussed ? <UserProfile userData={this.props.userData} /> : null}
                <span>{this.props.userData.name}</span>
                <div className="user_thumbnail_image_container">
                    <div className={onlineStatusClass} style={imageSource} />
                </div>
            </div>
        )
    };
}