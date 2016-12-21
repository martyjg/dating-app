import React from 'react';
import { render } from 'react-dom';

export default class UserProfile extends React.Component {

    render() {

        var imageSource = { backgroundImage: 'url(' + this.props.userData.preview_pic.url + ')' };

        return (
            <div className="user_profile_container">
                <div className="user_profile">
                    <h2>{this.props.userData.name}</h2>

                    <div className="user_profile_image" style={imageSource} />
                    <div className="user_profile_details">
                        <ul>
                            <li><span>Age: </span><span>{this.props.userData.personal.age}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
