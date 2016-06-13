import React from 'react';
import { render } from 'react-dom';

export default class UserProfile extends React.Component {

    render() {
        return (            
            <div className="user_profile">
                <h3>{this.props.userData.name}</h3>
            </div>
        )
    }
}