import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerRequest, registerSuccess, registerFailure } from '../../features/authSlice';
import axios from 'axios';
import { CloseButton } from 'react-bootstrap';

const Register = ({ onClose, onClick }) => {
  const dispatch = useDispatch();
  const registrationError = useSelector(state => state.user.registrationError);

  const initialValues = {
    email: '',
    password: '',
    name: '',
    phone: '',
    address: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(registerRequest());

      const response = await axios.post('http://localhost:8080/api/v1/auth/register', values);

      if (!response.data.success) {
        dispatch(registerFailure(response.data.message));
        return;
      }


      dispatch(registerSuccess());
      onClick()
       // Redirect after successful registration
    } catch (error) {
      console.error('Registration error:', error);
      dispatch(registerFailure('An error occurred during registration.'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='login-popup'>
      <div className="login-container row">
        <div className='d-flex justify-content-end align-items-center '>
        <CloseButton className='login-container-button2' aria-label="Hide" onClick={onClose}/>
        </div>
        <h2>Register</h2> 
        {registrationError && <div className="error-message">{registrationError}</div>}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='d-flex justify-content-between flex-wrap '>
              <div>
                <label htmlFor="name" className='login-container-label'>Name</label>
                <Field className="login-container-input" type="text" name="name" id="name" />
                <ErrorMessage name="name" component="div" />
              </div>
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
              <div>
                <label htmlFor="phone" className='login-container-label'>Phone</label>
                <Field className="login-container-input" type="text" name="phone" id="phone" />
                <ErrorMessage name="phone" component="div" />
              </div>
              <div>
                <label htmlFor="address" className='login-container-label'>Address</label>
                <Field className="login-container-input" type="text" name="address" id="address" />
                <ErrorMessage name="address" component="div" />
              </div>
              <button className='login-container-button' type="submit" disabled={isSubmitting}>
                Register Now
              </button>
            </Form>
          )}
        </Formik>
        
      </div>
    </div>
  );
};

export default Register;
