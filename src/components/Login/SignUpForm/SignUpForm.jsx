import React from 'react';
import s from './SignUp.module.scss'
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import CustomField from "../../../Elements/CustomField/CustomField";


const SignupForm = () => {
  const Validate = yup.object().shape({
    Login: yup.string()
      .min(3, 'Too Short')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Password: yup.string()
      .min(3, 'Too Short')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    confirmPassword: yup.string()
      .min(3, 'Too Short')
      .max(20, 'Must be 20 characters or less')
      .oneOf([yup.ref('Password')], 'Passwords do not match')
      .required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    confirmEmail: yup.string()
      .email('Invalid email address')
      .oneOf([yup.ref('email')], 'emails do not match')
      .required('Required'),
  })

  return (
    <div>
      <Formik initialValues={{
        Login: '',
        Password: '',
        confirmPassword: '',
        email: '',
        confirmEmail: '',
        consent: false,
      }}
              validationSchema={Validate}

              onSubmit={values => {
                const myValues = {
                  Login: values.Login,
                  Password: values.Password,
                  email: values.email,
                  consent: values.consent
                }
                alert(JSON.stringify(myValues, null, 2));
              }}
      >
        {({isSubmitting, values}) => (
          <Form className={s.form}>
            <h1>Registration</h1>
            <CustomField text={'Login'} name={'Login'} type={'text'} placeholder={null}/>
            <CustomField text={'Password'} name={'Password'} type={'password'} placeholder={null}/>
            <CustomField text={'confirmPassword'} name={'confirmPassword'} type={'password'} placeholder={null}/>
            <CustomField text={'email'} name={'email'} type={'email'} placeholder={null}/>
            <CustomField text={'confirmEmail'} name={'confirmEmail'} type={'email'} placeholder={null}/>
            <p>Я принимаю условия
              <a href="https://social-network.samuraijs.com/public-offer"> пользовательского соглашения </a>
              и даю согласие на обработку моих персональных данных:</p>
            <Field id="consent" type="checkbox"/>
            <button id="consent" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm