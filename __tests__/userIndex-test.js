jest.unmock('../src/components/userIndex.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import UserIndex from '../src/components/UserIndex';

describe('userIndex', () => {

    it('makes an request and returns data', () => {

        const userIndex = TestUtils.renderIntoDocument(
            <UserIndex />
        )

        var result = userIndex.componentDidMount;
        
    })

})