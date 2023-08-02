import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const navigation = useNavigate()
  return (
    <div className='login-popup  px-2'>
    <div className="login-container  ">
      <h2>Login</h2>
      <Formik
        initialValues={{ name: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            navigation('/')
            setSubmitting(false);
            
            console.log(values)
          }, 0);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name" className='login-container-label'>Name</label>
              <Field className="login-container-input" type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" />
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
      <button className='login-container-button2' onClick={onClose}>Close</button>
    </div>
    </div>
  );
};

export default Login;
