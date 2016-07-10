jest.unmock('../src/components/userThumbnail.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import UserThumbnail from '../src/components/userThumbnail';

describe('userThumbnail', () => {

    it('opens a profile on click', () => {

        const user = {
            name: "John Smith",
            id: 6,
            preview_pic: {url: "https://pradn.net/img/usr/365x650/09ae0df221115fe3384476c505.jpg"}
        }

        const userThumbnail = TestUtils.renderIntoDocument(
            <UserThumbnail userData={user} key={user.id}/>
        )

        const thumbnailNode = ReactDOM.findDOMNode(userThumbnail);

        TestUtils.Simulate.click(thumbnailNode);

        // expect(userThumbnail.thumbnailClick).toBeCalled();

    })

})