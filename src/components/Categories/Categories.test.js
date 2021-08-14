import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Categories from './Categories';

const mockStore = configureStore([]);

describe('test to component <Categories/>', () => {

    let state;

    beforeEach(() => {
        state = mockStore({
            'categories': ['Celulares y Teléfonos', 'Celulares y Smartphones'],
        });
        jest.resetAllMocks();

    });

    it('Renders correctly categories', () => {
        const component = shallow(
            <Provider store={state}>
                <Categories />
            </Provider>
        );
        expect(component).toMatchSnapshot;
    });

});

