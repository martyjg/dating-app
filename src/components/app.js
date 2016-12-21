import React from 'react';
import UserIndex from 'components/userIndex.js';

require('../../sass/style.scss');

export default class App extends React.Component {
    render() {
        return (
            <div className="app_main">
                <h1>Dating App</h1>
                <UserIndex />
            </div>
        );
    }
}
