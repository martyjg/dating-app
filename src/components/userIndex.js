import React from 'react';
import { render } from 'react-dom';
import UserThumbnail from './userThumbnail.js';
import FilterContainer from './filterContainer.js';

export default class UserIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            minAge: 18,
            maxAge: 30
        }
    };

    // AJAX request made for data as soon as UserIndex is rendered
    componentDidMount() {
        return this.getUserData();
    };

    getUserData() {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8080/user_data.json', true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            this.setUserData(data);
          }
        }.bind(this);
        request.send();
    };

    setUserData(data) {
        this.setState({
            users : data.items
        })
        console.log(data.items);
    };

    render() {
        var minAgeValue = this.state.minAge;
        var maxAgeValue = this.state.maxAge;
        return (
            <div>
            <div className="user_index">

                {this.state.users.map(function(user) {
                    if (user.personal.age >= minAgeValue && user.personal.age <= maxAgeValue) {
                        return (
                            <UserThumbnail userData={user} key={user.id} />
                        )
                    }
                })}

            </div>
                <FilterContainer />
            </div>
        )
    };
}
