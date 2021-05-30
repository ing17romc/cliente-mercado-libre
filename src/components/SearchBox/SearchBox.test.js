import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({ pathname: '/items', search: '?search=huawei', hash: '', key: 'r8qwf6' }),
    useHistory: () => ({}),
}));

describe('test to component <SearchBox/>', () => {

    it('Renders correctly SearchBox', () => {
        const component = shallow(
            <SearchBox />
        );
        expect(component).toMatchSnapshot;
    });

});

