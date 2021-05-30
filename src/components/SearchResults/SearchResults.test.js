import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('test to component <SearchResults/>', () => {

    let state;

    beforeEach(() => {
        state = mockStore({
            'categories': [],
        });
        jest.resetAllMocks();

    });

    it('Renders correctly SearchResults', () => {
        const component = shallow(
            <Provider store={state}>
                <SearchResults />
            </Provider>
        );
        expect(component).toMatchSnapshot;
    });

});