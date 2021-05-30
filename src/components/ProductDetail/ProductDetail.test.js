import React from 'react';
import { shallow } from 'enzyme';
import ProductDetail from './ProductDetail';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('test to component <ProductDetail/>', () => {

    let state;

    beforeEach(() => {
        state = mockStore({
            'categories': [],
        });
        jest.resetAllMocks();

    });

    it('Renders correctly ProductDetail', () => {
        const component = shallow(
            <Provider store={state}>
                <ProductDetail />
            </Provider>
        );
        expect(component).toMatchSnapshot;
    });

});

