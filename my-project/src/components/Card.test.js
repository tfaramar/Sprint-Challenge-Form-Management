import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Card from './Card';

describe('<Card />', () => {
    it('renders without crashing', () => {
        render(<Card />);
    });
    it('props are successfully passed and displayed', () => {
        const display = render(<Card name={'hamburger'} course={'main'} technique={'grill'} />);
        display.getByText(/name: hamburger/i);
        display.getByText(/course: main/i);
        display.getByText(/technique: grill/i);
    })

})