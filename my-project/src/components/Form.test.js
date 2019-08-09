import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import RegisterForm from './Form';

describe('<RegisterForm />', () => {
    it('renders without crashing', () => {
        render(<RegisterForm />);
    });
    // it('submits information to API', () => {
    //     const submit = jest.fn();
        
    // })
})