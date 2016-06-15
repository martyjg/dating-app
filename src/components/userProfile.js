import React from 'react';
import { render } from 'react-dom';

export default class UserProfile extends React.Component {

    render() {

        var imageSource = { backgroundImage: 'url(' + this.props.userData.preview_pic.url + ')' };

        return (
            <div className="user_profile_container">
                <div className="user_profile">
                    <h3>{this.props.userData.name}</h3>

                    <div className="user_profile_image" style={imageSource}/>
                </div>
            </div>
        )
    }
}