import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {

    return (
        <div className="form-container">
            <Form>
                <Field type="text" name="firstname" placeholder="your first name" />

                <Field type="text" name="lastname" placeholder="your last name" />

                <Field type="text" name="username" placeholder="enter a username" />

                <Field type="password" name="password" placeholder="enter a password" />

                <button type="submit">Submit</button>

            </Form>
        </div>
    )
};

const FormikRegisterForm = withFormik({

    mapPropsToValues({ firstname, lastname, username, password }) {
        return {
            firstname: firstname || '',
            lastname: lastname || '',
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        firstname: Yup.string()
            .required('please enter your first name.'),
        lastname: Yup.string()
            .required('please enter your last name.'),
        username: Yup.string()
            .min(4, 'your username must be at least 4 characters long.')
            .required('please enter a username.'),
        password: Yup.string()
            .min(8, 'your password must be at least 8 characters long.')
            .required('please enter a password.')
    })

    
    //handleSubmit post to server function - pass in from App.js

})(RegisterForm);

export default FormikRegisterForm;