import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import RegisterForm from './Form';

describe('<RegisterForm />', () => {
    it('renders without crashing', () => {
        render(<RegisterForm />);
    });
    it('forms displays input text', () => {
        
    });
    it('calls handleSubmit function when form is submitted', () => {
        const submit = jest.fn();
        const wrapper = mount(<RegisterForm onSubmit={onSubmitFn}/>);

        const form = wrapper.find(Form);
        form.simulate('submit');
        expect(onSubmitFn).toHaveBeenCalledTimes(1); 
    })
})