import React from 'react';
import UserIndex from 'components/userIndex.js';

export default class App extends React.Component {
    render() {
        return (
            <div className="app_main">
                <h1>Gay Mercutio</h1>
                <UserIndex />
            </div>
        );
    }
}