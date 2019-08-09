import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegisterForm = ({ errors, touched, values, handleSubmit }) => {

    return (
        <div className="form-container">
            <Form>
                <Field type="text" name="firstname" placeholder="your first name" />
                {touched.firstname && errors.firstname && (
                    <p className="error">{errors.firstname}</p>
                )}

                <Field type="text" name="lastname" placeholder="your last name" />
                {touched.lastname && errors.lastname && (
                    <p className="error">{errors.lastname}</p>
                )}

                <Field type="text" name="username" placeholder="enter a username" />
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}

                <Field type="password" name="password" placeholder="enter a password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}

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
    }),

    handleSubmit(values) {
        //console.log(values);
        axios.post('http://localhost:5000/api/register', values)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => console.log(error.response));
    }

})(RegisterForm);

export default FormikRegisterForm;