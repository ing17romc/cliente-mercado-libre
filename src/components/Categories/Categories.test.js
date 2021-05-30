import React from 'react';
import Categories from './Categories';
import { mount } from 'enzyme';
describe('Categories', () => {
   

    it('my first testing', () => { 
        test('snapshot', () => {      
        const component = mount(<Categories></Categories>);
        expect(component.find('div.categories').to.have.lengthOf(1)); 
        });

    });
});