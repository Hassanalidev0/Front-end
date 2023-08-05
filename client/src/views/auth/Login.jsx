import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginSuccess } from '../../features/authSlice';
import {  NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CloseButton } from 'react-bootstrap';

const Login = ({ onClose, onClick }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', values);

      if (!response.data.success) {
        console.error('Login error:', response.data.message);
        return;
      }

      const userData = response.data.user;
      const authToken = response.data.token;

      // Dispatch loginSuccess action with user and token data
      dispatch(loginSuccess({ user: userData, token: authToken }));

      navigation('/'); // Redirect after successful login
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='login-popup  px-2'>
      <div className="login-container row">
      <div className='d-flex justify-content-end align-items-center '>
       
        <CloseButton className='login-container-button2' aria-label="Hide" onClick={onClose}/>
        </div>
        <h2>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="email" className='login-container-label'>Email</label>
                <Field className="login-container-input" type="email" name="email" id="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <label htmlFor="password" className='login-container-label'>Password</label>
                <Field className="login-container-input" type="password" name="password" id="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <button className='login-container-button' type="submit" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>
        <NavLink className='text-center' onClick={onClick}> Register now</NavLink>
      </div>
    </div>
  );
};

export default Login;
